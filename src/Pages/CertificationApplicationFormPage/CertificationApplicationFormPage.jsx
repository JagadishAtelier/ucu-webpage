import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CertificationApplicationFormPage.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export default function CertificationApplicationFormPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const leadData = location.state?.leadData || null;

  // Multi-step phase
  const [currentStep, setCurrentStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // 1. Program of Interest
    programName: leadData?.program || "",
    preferredCohort: "Fall 2026",
    preferredLearningMode: "Hybrid",

    // 2. Personal Details
    fullName: leadData?.fullName || "",
    dateOfBirth: "",
    gender: "Male",
    nationality: "Indian",
    email: leadData?.email || "",
    phone: leadData ? (leadData.phoneCode || "") + (leadData.phoneNumber || "") : "",
    currentAddress: leadData?.city || "",
    permanentAddress: "",
    sameAsCurrent: false,
    emergencyContactName: "",
    emergencyContactPhone: "",

    // 3. Academic & Professional Qualifications
    education: [
      { degreeMajor: "", institution: "", yearOfGraduation: "", gpaPercentage: "" }
    ],
    certifications: [],

    // 4. Work Experience Summary
    totalYears: leadData?.workExperience ? parseInt(leadData.workExperience) || 0 : 0,
    totalMonths: 0,
    currentEmployment: {
      organizationName: "",
      designation: "",
      dateOfJoining: "",
      location: "",
      industrySector: "",
      industrySectorOther: "",
      responsibilities: "",
    },
    pastEmployment: {
      organizationName: "",
      designation: "",
      tenure: "",
    },

    // 5. Statement of Purpose & Career Goals
    whyProgram: "",
    professionalAchievement: "",

    // 6. Document Checklist & Declaration
    resumeUrl: "",
    idProofUrl: "",
    graduationCertificateUrl: "",
    declarationAccepted: false,
  });

  // Upload Progress States
  const [uploadProgress, setUploadProgress] = useState({
    resume: { percent: 0, loading: false, success: false },
    idProof: { percent: 0, loading: false, success: false },
    graduation: { percent: 0, loading: false, success: false },
  });

  // Sync permanent address if checkbox checked
  useEffect(() => {
    if (formData.sameAsCurrent) {
      setFormData(prev => ({
        ...prev,
        permanentAddress: prev.currentAddress
      }));
    }
  }, [formData.currentAddress, formData.sameAsCurrent]);

  // Handle simple input changes
  const handleInputChange = (e, section = null) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: val
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: val
      }));
    }
  };

  // Add/Remove dynamic education qualifications (Max 2)
  const handleAddEducation = () => {
    if (formData.education.length >= 2) return;
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { degreeMajor: "", institution: "", yearOfGraduation: "", gpaPercentage: "" }]
    }));
  };

  const handleRemoveEducation = (index) => {
    if (formData.education.length <= 1) return;
    const newEd = [...formData.education];
    newEd.splice(index, 1);
    setFormData(prev => ({ ...prev, education: newEd }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEd = [...formData.education];
    newEd[index][name] = value;
    setFormData(prev => ({ ...prev, education: newEd }));
  };

  // Add/Remove certifications (Max 2)
  const handleAddCertification = () => {
    if (formData.certifications.length >= 2) return;
    setFormData(prev => ({
      ...prev,
      certifications: [...prev.certifications, { certificationName: "", issuingBody: "", year: "" }]
    }));
  };

  const handleRemoveCertification = (index) => {
    const newCert = [...formData.certifications];
    newCert.splice(index, 1);
    setFormData(prev => ({ ...prev, certifications: newCert }));
  };

  const handleCertificationChange = (index, e) => {
    const { name, value } = e.target;
    const newCert = [...formData.certifications];
    newCert[index][name] = value;
    setFormData(prev => ({ ...prev, certifications: newCert }));
  };

  // Word Counter helper
  const getWordCount = (str) => {
    if (!str) return 0;
    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  // Pre-signed direct upload handler
  const handleFileUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadProgress(prev => ({
      ...prev,
      [type]: { percent: 0, loading: true, success: false }
    }));

    try {
      // 1. Get presigned upload URL from backend
      const presignResponse = await axios.post(`${API_BASE_URL}/upload/presign`, {
        filename: `${Date.now()}_${file.name}`,
        contentType: file.type,
        size: file.size
      });

      const { uploadUrl, publicUrl } = presignResponse.data;

      // 2. Put file directly to DigitalOcean Spaces
      await axios.put(uploadUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(prev => ({
            ...prev,
            [type]: { ...prev[type], percent: percentCompleted }
          }));
        }
      });

      // 3. Set public URL inside form fields
      const urlFieldName = type === "resume" ? "resumeUrl" : type === "idProof" ? "idProofUrl" : "graduationCertificateUrl";
      setFormData(prev => ({
        ...prev,
        [urlFieldName]: publicUrl
      }));

      setUploadProgress(prev => ({
        ...prev,
        [type]: { percent: 100, loading: false, success: true }
      }));

    } catch (error) {
      console.error(`Upload error for ${type}:`, error);
      alert(`Failed to upload ${type}. Please try again.`);
      setUploadProgress(prev => ({
        ...prev,
        [type]: { percent: 0, loading: false, success: false }
      }));
    }
  };

  // Validation before going to next step
  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.programName.trim()) {
          alert("Please specify the Program of Interest.");
          return false;
        }
        return true;

      case 2:
        if (!formData.fullName.trim() || !formData.dateOfBirth || !formData.nationality.trim() ||
            !formData.email.trim() || !formData.phone.trim() || !formData.currentAddress.trim() ||
            !formData.permanentAddress.trim() || !formData.emergencyContactName.trim() ||
            !formData.emergencyContactPhone.trim()) {
          alert("Please fill in all mandatory fields in Section 2.");
          return false;
        }
        return true;

      case 3:
        for (let i = 0; i < formData.education.length; i++) {
          const ed = formData.education[i];
          if (!ed.degreeMajor.trim() || !ed.institution.trim() || !ed.yearOfGraduation.trim() || !ed.gpaPercentage.trim()) {
            alert(`Please complete all fields for Education entry #${i + 1}`);
            return false;
          }
        }
        return true;

      case 4:
        const current = formData.currentEmployment;
        if (!current.organizationName.trim() || !current.designation.trim() || !current.industrySector) {
          alert("Please fill in Current Employment details (Organization, Designation, Industry).");
          return false;
        }
        return true;

      case 5:
        if (!formData.whyProgram.trim() || !formData.professionalAchievement.trim()) {
          alert("Please answer both essays before proceeding.");
          return false;
        }
        const wordCount1 = getWordCount(formData.whyProgram);
        const wordCount2 = getWordCount(formData.professionalAchievement);
        if (wordCount1 > 250) {
          alert(`Statement of Purpose (Q1) exceeds the 250 words limit (Current: ${wordCount1} words).`);
          return false;
        }
        if (wordCount2 > 200) {
          alert(`Professional Achievement essay (Q2) exceeds the 200 words limit (Current: ${wordCount2} words).`);
          return false;
        }
        return true;

      case 6:
        if (!formData.resumeUrl) {
          alert("Please upload your Resume/CV.");
          return false;
        }
        if (!formData.idProofUrl) {
          alert("Please upload a Government ID Proof.");
          return false;
        }
        if (!formData.graduationCertificateUrl) {
          alert("Please upload your Graduation Degree / Transcripts.");
          return false;
        }
        if (!formData.declarationAccepted) {
          alert("Please check and accept the declaration.");
          return false;
        }
        return true;

      default:
        return true;
    }
  };

  // Submit complete application
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setLoading(true);

    // Format payload matching schema
    const payload = {
      programOfInterest: {
        programName: formData.programName,
        preferredCohort: formData.preferredCohort,
        preferredLearningMode: formData.preferredLearningMode
      },
      personalDetails: {
        fullName: formData.fullName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        nationality: formData.nationality,
        email: formData.email,
        phone: formData.phone,
        currentAddress: formData.currentAddress,
        permanentAddress: formData.permanentAddress,
        emergencyContactName: formData.emergencyContactName,
        emergencyContactPhone: formData.emergencyContactPhone
      },
      qualifications: {
        education: formData.education,
        certifications: formData.certifications
      },
      workExperience: {
        totalYears: parseInt(formData.totalYears) || 0,
        totalMonths: parseInt(formData.totalMonths) || 0,
        currentEmployment: formData.currentEmployment,
        pastEmployment: formData.pastEmployment
      },
      statementOfPurpose: {
        whyProgram: formData.whyProgram,
        professionalAchievement: formData.professionalAchievement
      },
      documents: {
        resumeUrl: formData.resumeUrl,
        idProofUrl: formData.idProofUrl,
        graduationCertificateUrl: formData.graduationCertificateUrl
      },
      declaration: {
        accepted: formData.declarationAccepted,
        signedDate: new Date()
      }
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/certification-applications/submit`, payload);
      if (response.data.success) {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert(err.response?.data?.message || "Something went wrong. Please check fields and try again.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="certification-apply-container print-only-container">
      <div className="certification-apply-wrapper">

        {/* Header */}
        {!success && (
          <div className="certification-apply-header">
            <h1>UCU BUSINESS SCHOOL</h1>
            <p>Application Portal for Admissions: Certification & Executive Programs</p>
          </div>
        )}

        {/* Success State */}
        {success ? (
          <div className="certification-form-card success-screen">
            <div className="success-icon-container">
              <i className="bi bi-check2-all"></i>
            </div>
            <h2>Submission Successful!</h2>
            <p>Thank you for submitting your application to UCU Business School. Our admissions team will review your application and documents shortly. We will reach out via email: <strong>{formData.email}</strong>.</p>
            <button className="btn-success-home" onClick={() => navigate("/")}>
              Return to Homepage
            </button>
          </div>
        ) : (
          <>
            {/* Stepper Progress */}
            <div className="certification-stepper">
              <div className="certification-stepper-progress" style={{ width: `${((currentStep - 1) / 5) * 100}%` }} />
              {[
                { number: 1, label: "Program" },
                { number: 2, label: "Personal" },
                { number: 3, label: "Academics" },
                { number: 4, label: "Experience" },
                { number: 5, label: "SOP Essays" },
                { number: 6, label: "Upload & Verify" }
              ].map(s => (
                <div key={s.number} className={`certification-stepper-step ${currentStep === s.number ? "active" : currentStep > s.number ? "completed" : ""}`} onClick={() => { if (s.number < currentStep) setCurrentStep(s.number); }}>
                  <div className="certification-stepper-step-number">{s.number}</div>
                  <div className="certification-stepper-step-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="certification-apply-form">

              {/* STEP 1: Program of Interest */}
              {currentStep === 1 && (
                <div className="certification-form-card" data-aos="fade-up">
                  <h3 className="certification-form-card-title">1. Program of Interest</h3>
                  <div className="form-grid">
                    <div className="form-group form-fullwidth">
                      <label htmlFor="programName">Program Name <span>*</span></label>
                      <input type="text" id="programName" name="programName" value={formData.programName} onChange={handleInputChange} placeholder="e.g. Executive PGDM in Business Analytics" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="preferredCohort">Preferred Cohort / Intake <span>*</span></label>
                      <select id="preferredCohort" name="preferredCohort" value={formData.preferredCohort} onChange={handleInputChange} className="form-control">
                        <option value="Spring 2026">Spring 2026</option>
                        <option value="Fall 2026">Fall 2026</option>
                        <option value="Spring 2027">Spring 2027</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Preferred Learning Mode <span>*</span></label>
                      <div className="learning-mode-selector">
                        {["On-Campus", "Hybrid", "100% Online"].map(mode => (
                          <label key={mode} className={`learning-mode-option ${formData.preferredLearningMode === mode ? "selected" : ""}`}>
                            <input type="radio" name="preferredLearningMode" value={mode} checked={formData.preferredLearningMode === mode} onChange={handleInputChange} />
                            <span>{mode}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Personal Details */}
              {currentStep === 2 && (
                <div className="certification-form-card" data-aos="fade-up">
                  <h3 className="certification-form-card-title">2. Personal Details</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name (as in Passport/ID) <span>*</span></label>
                      <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="dateOfBirth">Date of Birth <span>*</span></label>
                      <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="gender">Gender <span>*</span></label>
                      <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} className="form-control">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-binary">Non-binary</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="nationality">Nationality <span>*</span></label>
                      <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} placeholder="e.g. Indian" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Primary Email Address <span>*</span></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Mobile / Phone Number <span>*</span></label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 9876543210" className="form-control" required />
                    </div>

                    <div className="form-group form-fullwidth">
                      <label htmlFor="currentAddress">Current Residential Address <span>*</span></label>
                      <textarea id="currentAddress" name="currentAddress" value={formData.currentAddress} onChange={handleInputChange} placeholder="Flat, Street, City, ZIP, Country" rows="3" className="form-control" required />
                    </div>

                    <div className="form-group form-fullwidth">
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <input type="checkbox" id="sameAsCurrent" name="sameAsCurrent" checked={formData.sameAsCurrent} onChange={handleInputChange} style={{ width: '16px', height: '16px', accentColor: '#5ac501' }} />
                        <label htmlFor="sameAsCurrent" style={{ margin: 0, fontSize: '0.85rem' }}>Permanent Address is the same as current address</label>
                      </div>
                    </div>

                    <div className="form-group form-fullwidth">
                      <label htmlFor="permanentAddress">Permanent Address <span>*</span></label>
                      <textarea id="permanentAddress" name="permanentAddress" value={formData.permanentAddress} onChange={handleInputChange} placeholder="Flat, Street, City, ZIP, Country" rows="3" className="form-control" disabled={formData.sameAsCurrent} required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="emergencyContactName">Emergency Contact Name <span>*</span></label>
                      <input type="text" id="emergencyContactName" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleInputChange} placeholder="Contact Person Name" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="emergencyContactPhone">Emergency Contact Number <span>*</span></label>
                      <input type="tel" id="emergencyContactPhone" name="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={handleInputChange} placeholder="Emergency Phone No." className="form-control" required />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Academic Qualifications */}
              {currentStep === 3 && (
                <div className="certification-form-card" data-aos="fade-up">
                  <div className="qualification-list-header">
                    <h3 className="certification-form-card-title" style={{ margin: 0 }}>3. Academic & Professional Qualifications</h3>
                    {formData.education.length < 2 && (
                      <button type="button" className="add-btn" onClick={handleAddEducation}>
                        + Add Education Entry
                      </button>
                    )}
                  </div>

                  {formData.education.map((ed, idx) => (
                    <div key={idx} className="qualification-subcard">
                      <div className="qualification-subcard-title">
                        <span>Education Entry #{idx + 1}</span>
                        {formData.education.length > 1 && (
                          <button type="button" className="remove-btn" onClick={() => handleRemoveEducation(idx)}>
                            Remove
                          </button>
                        )}
                      </div>
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Degree / Major <span>*</span></label>
                          <input type="text" name="degreeMajor" value={ed.degreeMajor} onChange={(e) => handleEducationChange(idx, e)} placeholder="e.g. B.Tech in Computer Science" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Institution / University <span>*</span></label>
                          <input type="text" name="institution" value={ed.institution} onChange={(e) => handleEducationChange(idx, e)} placeholder="e.g. IIT Madras" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Year of Graduation <span>*</span></label>
                          <input type="text" name="yearOfGraduation" value={ed.yearOfGraduation} onChange={(e) => handleEducationChange(idx, e)} placeholder="e.g. 2020" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>GPA / Marks Percentage <span>*</span></label>
                          <input type="text" name="gpaPercentage" value={ed.gpaPercentage} onChange={(e) => handleEducationChange(idx, e)} placeholder="e.g. 8.5 CGPA or 85%" className="form-control" required />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="qualification-list-header" style={{ marginTop: "40px" }}>
                    <h4 className="certification-form-card-subtitle" style={{ fontSize: "1.1rem", fontWeight: "700", borderLeft: "3px solid #5ac501", paddingLeft: "10px" }}>Professional Certifications</h4>
                    {formData.certifications.length < 2 && (
                      <button type="button" className="add-btn" onClick={handleAddCertification}>
                        + Add Certification
                      </button>
                    )}
                  </div>

                  {formData.certifications.map((cert, idx) => (
                    <div key={idx} className="qualification-subcard">
                      <div className="qualification-subcard-title">
                        <span>Certification Entry #{idx + 1}</span>
                        <button type="button" className="remove-btn" onClick={() => handleRemoveCertification(idx)}>
                          Remove
                        </button>
                      </div>
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Certification Name</label>
                          <input type="text" name="certificationName" value={cert.certificationName} onChange={(e) => handleCertificationChange(idx, e)} placeholder="e.g. PMP" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Issuing Body</label>
                          <input type="text" name="issuingBody" value={cert.issuingBody} onChange={(e) => handleCertificationChange(idx, e)} placeholder="e.g. Project Management Institute" className="form-control" />
                        </div>
                        <div className="form-group form-fullwidth">
                          <label>Year of Issuance / Expiry</label>
                          <input type="text" name="year" value={cert.year} onChange={(e) => handleCertificationChange(idx, e)} placeholder="e.g. 2023" className="form-control" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* STEP 4: Work Experience */}
              {currentStep === 4 && (
                <div className="certification-form-card" data-aos="fade-up">
                  <h3 className="certification-form-card-title">4. Work Experience Summary</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="totalYears">Total Experience (Years) <span>*</span></label>
                      <input type="number" id="totalYears" name="totalYears" value={formData.totalYears} onChange={handleInputChange} min="0" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="totalMonths">Total Experience (Months) <span>*</span></label>
                      <input type="number" id="totalMonths" name="totalMonths" value={formData.totalMonths} onChange={handleInputChange} min="0" max="11" className="form-control" required />
                    </div>

                    <div className="form-group form-fullwidth" style={{ marginTop: "20px" }}>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#5ac501", marginBottom: "15px" }}>Current Employment Details</h4>
                    </div>

                    <div className="form-group">
                      <label>Organization Name <span>*</span></label>
                      <input type="text" name="organizationName" value={formData.currentEmployment.organizationName} onChange={(e) => handleInputChange(e, "currentEmployment")} placeholder="e.g. Tech Solutions Inc." className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label>Designation / Role <span>*</span></label>
                      <input type="text" name="designation" value={formData.currentEmployment.designation} onChange={(e) => handleInputChange(e, "currentEmployment")} placeholder="e.g. Senior Software Engineer" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label>Date of Joining</label>
                      <input type="date" name="dateOfJoining" value={formData.currentEmployment.dateOfJoining} onChange={(e) => handleInputChange(e, "currentEmployment")} className="form-control" />
                    </div>

                    <div className="form-group">
                      <label>Work Location</label>
                      <input type="text" name="location" value={formData.currentEmployment.location} onChange={(e) => handleInputChange(e, "currentEmployment")} placeholder="e.g. Bangalore, India" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label>Industry / Sector <span>*</span></label>
                      <select name="industrySector" value={formData.currentEmployment.industrySector} onChange={(e) => handleInputChange(e, "currentEmployment")} className="form-control" required>
                        <option value="">-- Select Industry --</option>
                        <option value="Consulting">Consulting</option>
                        <option value="IT/Tech">IT / Technology</option>
                        <option value="Finance/Banking">Finance / Banking</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {formData.currentEmployment.industrySector === "Other" && (
                      <div className="form-group">
                        <label>Specify Industry <span>*</span></label>
                        <input type="text" name="industrySectorOther" value={formData.currentEmployment.industrySectorOther} onChange={(e) => handleInputChange(e, "currentEmployment")} placeholder="Specify Industry" className="form-control" required />
                      </div>
                    )}

                    <div className="form-group form-fullwidth">
                      <label>Brief Roles & Responsibilities</label>
                      <textarea name="responsibilities" value={formData.currentEmployment.responsibilities} onChange={(e) => handleInputChange(e, "currentEmployment")} placeholder="Outline your key project deliverables and responsibilities" rows="3" className="form-control" />
                    </div>

                    <div className="form-group form-fullwidth" style={{ marginTop: "20px" }}>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#5ac501", marginBottom: "15px" }}>Past Employment History (Most Recent Prior Role)</h4>
                    </div>

                    <div className="form-group">
                      <label>Previous Organization</label>
                      <input type="text" name="organizationName" value={formData.pastEmployment.organizationName} onChange={(e) => handleInputChange(e, "pastEmployment")} placeholder="Company Name" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label>Previous Designation</label>
                      <input type="text" name="designation" value={formData.pastEmployment.designation} onChange={(e) => handleInputChange(e, "pastEmployment")} placeholder="Designation" className="form-control" />
                    </div>

                    <div className="form-group form-fullwidth">
                      <label>Tenure (Start Year - End Year)</label>
                      <input type="text" name="tenure" value={formData.pastEmployment.tenure} onChange={(e) => handleInputChange(e, "pastEmployment")} placeholder="e.g. 2018 - 2021" className="form-control" />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Statement of Purpose */}
              {currentStep === 5 && (
                <div className="certification-form-card" data-aos="fade-up">
                  <h3 className="certification-form-card-title">5. Statement of Purpose & Career Goals</h3>

                  <div className="form-group form-fullwidth" style={{ marginBottom: "30px" }}>
                    <label htmlFor="whyProgram">Q1. Why are you interested in this program? How does it align with your career goals? (Max 250 words) <span>*</span></label>
                    <textarea id="whyProgram" name="whyProgram" value={formData.whyProgram} onChange={handleInputChange} placeholder="Type your response here..." rows="8" className="form-control" required />
                    <div className={`essay-word-count ${getWordCount(formData.whyProgram) > 250 ? "warning" : ""}`}>
                      <span>Word Limit: 250 words max</span>
                      <span>Current: {getWordCount(formData.whyProgram)} words</span>
                    </div>
                  </div>

                  <div className="form-group form-fullwidth">
                    <label htmlFor="professionalAchievement">Q2. Describe a major professional achievement or business problem you solved. What was your role? (Max 200 words) <span>*</span></label>
                    <textarea id="professionalAchievement" name="professionalAchievement" value={formData.professionalAchievement} onChange={handleInputChange} placeholder="Type your response here..." rows="7" className="form-control" required />
                    <div className={`essay-word-count ${getWordCount(formData.professionalAchievement) > 200 ? "warning" : ""}`}>
                      <span>Word Limit: 200 words max</span>
                      <span>Current: {getWordCount(formData.professionalAchievement)} words</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: Uploads & Verification */}
              {currentStep === 6 && (
                <div className="certification-form-card" data-aos="fade-up">
                  <h3 className="certification-form-card-title">6. Document Checklist & Declaration</h3>

                  <div className="upload-zone-wrapper">
                    {/* Resume Upload */}
                    <div className="form-group">
                      <label>Updated Resume / CV <span>*</span></label>
                      <div className="upload-zone" onClick={() => document.getElementById("file-resume").click()}>
                        <input type="file" id="file-resume" accept=".pdf,.doc,.docx" onChange={(e) => handleFileUpload(e, "resume")} style={{ display: "none" }} />
                        <i className="bi bi-cloud-arrow-up upload-icon"></i>
                        <p className="upload-text">Drag and drop or <span>browse</span> your Resume file</p>
                        <p className="upload-hint">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>

                        {uploadProgress.resume.loading && (
                          <div className="upload-progress-container">
                            <div className="upload-progress-bar">
                              <div className="upload-progress-fill" style={{ width: `${uploadProgress.resume.percent}%` }} />
                            </div>
                            <div className="upload-status-details">
                              <span>Uploading...</span>
                              <span>{uploadProgress.resume.percent}%</span>
                            </div>
                          </div>
                        )}

                        {formData.resumeUrl && (
                          <div className="upload-success-badge">
                            <i className="bi bi-check-circle-fill"></i> Resume Uploaded successfully
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Government ID Upload */}
                    <div className="form-group">
                      <label>Government ID Proof (Passport, PAN, Aadhar, License) <span>*</span></label>
                      <div className="upload-zone" onClick={() => document.getElementById("file-idProof").click()}>
                        <input type="file" id="file-idProof" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, "idProof")} style={{ display: "none" }} />
                        <i className="bi bi-person-bounding-box upload-icon"></i>
                        <p className="upload-text">Drag and drop or <span>browse</span> your ID proof</p>
                        <p className="upload-hint">Supported formats: PDF, JPG, PNG (Max 5MB)</p>

                        {uploadProgress.idProof.loading && (
                          <div className="upload-progress-container">
                            <div className="upload-progress-bar">
                              <div className="upload-progress-fill" style={{ width: `${uploadProgress.idProof.percent}%` }} />
                            </div>
                            <div className="upload-status-details">
                              <span>Uploading...</span>
                              <span>{uploadProgress.idProof.percent}%</span>
                            </div>
                          </div>
                        )}

                        {formData.idProofUrl && (
                          <div className="upload-success-badge">
                            <i className="bi bi-check-circle-fill"></i> Government ID Uploaded
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Graduation Certificate Upload */}
                    <div className="form-group">
                      <label>Graduation Degree & Transcripts <span>*</span></label>
                      <div className="upload-zone" onClick={() => document.getElementById("file-graduation").click()}>
                        <input type="file" id="file-graduation" accept=".pdf,image/*" onChange={(e) => handleFileUpload(e, "graduation")} style={{ display: "none" }} />
                        <i className="bi bi-journal-bookmark-fill upload-icon"></i>
                        <p className="upload-text">Drag and drop or <span>browse</span> your Graduation Cert / Marksheets</p>
                        <p className="upload-hint">Supported formats: PDF, Images (Max 10MB)</p>

                        {uploadProgress.graduation.loading && (
                          <div className="upload-progress-container">
                            <div className="upload-progress-bar">
                              <div className="upload-progress-fill" style={{ width: `${uploadProgress.graduation.percent}%` }} />
                            </div>
                            <div className="upload-status-details">
                              <span>Uploading...</span>
                              <span>{uploadProgress.graduation.percent}%</span>
                            </div>
                          </div>
                        )}

                        {formData.graduationCertificateUrl && (
                          <div className="upload-success-badge">
                            <i className="bi bi-check-circle-fill"></i> Graduation Certificate Uploaded
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Summary / Review Review Section */}
                  <div style={{ marginTop: "40px" }} className="no-print">
                    <h4 style={{ fontSize: "1.15rem", fontWeight: "700", borderLeft: "3.5px solid #5ac501", paddingLeft: "10px", marginBottom: "20px" }}>Review Your Application Details</h4>
                    <div className="print-actions">
                      <button type="button" className="btn-print" onClick={() => window.print()}>
                        <i className="bi bi-printer"></i> Review / Save PDF admission form
                      </button>
                    </div>
                  </div>

                  {/* Printable Details Screen for Review */}
                  <div className="review-grid print-only" style={{ marginTop: "20px" }}>
                    <div className="review-section">
                      <div className="review-section-title">1. Program Details</div>
                      <div className="review-details-list">
                        <div className="review-detail-item">
                          <strong>Program:</strong>
                          <span>{formData.programName}</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Preferred Cohort:</strong>
                          <span>{formData.preferredCohort}</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Learning Mode:</strong>
                          <span>{formData.preferredLearningMode}</span>
                        </div>
                      </div>
                    </div>

                    <div className="review-section">
                      <div className="review-section-title">2. Personal details</div>
                      <div className="review-details-list">
                        <div className="review-detail-item">
                          <strong>Full Name:</strong>
                          <span>{formData.fullName}</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Date of Birth:</strong>
                          <span>{formData.dateOfBirth}</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Gender:</strong>
                          <span>{formData.gender}</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Nationality:</strong>
                          <span>{formData.nationality}</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Email:</strong>
                          <span>{formData.email}</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Phone:</strong>
                          <span>{formData.phone}</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Current Address:</strong>
                          <span>{formData.currentAddress}</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Permanent Address:</strong>
                          <span>{formData.permanentAddress}</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Emergency Contact:</strong>
                          <span>{formData.emergencyContactName} ({formData.emergencyContactPhone})</span>
                        </div>
                      </div>
                    </div>

                    <div className="review-section">
                      <div className="review-section-title">3. Education & Credentials</div>
                      {formData.education.map((ed, idx) => (
                        <div key={idx} style={{ marginBottom: "10px", fontSize: "0.88rem" }}>
                          <strong>Entry #{idx + 1}:</strong> {ed.degreeMajor} from {ed.institution} (Class of {ed.yearOfGraduation}) - Grade: {ed.gpaPercentage}
                        </div>
                      ))}
                    </div>

                    <div className="review-section">
                      <div className="review-section-title">4. Experience & Employment</div>
                      <div className="review-details-list">
                        <div className="review-detail-item">
                          <strong>Total Experience:</strong>
                          <span>{formData.totalYears} Years {formData.totalMonths} Months</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Current Org:</strong>
                          <span>{formData.currentEmployment.organizationName} ({formData.currentEmployment.designation})</span>
                        </div>
                        <div className="review-detail-item">
                          <strong>Current Sector:</strong>
                          <span>{formData.currentEmployment.industrySector === "Other" ? formData.currentEmployment.industrySectorOther : formData.currentEmployment.industrySector}</span>
                        </div>
                      </div>
                    </div>

                    <div className="review-section">
                      <div className="review-section-title">5. Statements of Purpose (Essays)</div>
                      <div style={{ marginBottom: "15px" }}>
                        <strong style={{ fontSize: "0.78rem" }}>Q1. Why are you interested in this program?</strong>
                        <div className="review-essay-text">{formData.whyProgram}</div>
                      </div>
                      <div>
                        <strong style={{ fontSize: "0.78rem" }}>Q2. Describe a major professional achievement:</strong>
                        <div className="review-essay-text">{formData.professionalAchievement}</div>
                      </div>
                    </div>
                  </div>

                  {/* Declaration Toggle Checkbox */}
                  <div style={{ marginTop: "30px" }}>
                    <label className="declaration-checkbox-wrapper">
                      <input type="checkbox" name="declarationAccepted" checked={formData.declarationAccepted} onChange={handleInputChange} required />
                      <p>I hereby declare that all sections of this form have been completed accurately and fully. I verify that the certificates and documentation uploaded are valid credentials belonging to me. Any false information provided will lead to automatic rejection of my candidature. *</p>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="form-navigation no-print">
                {currentStep > 1 && (
                  <button type="button" className="btn-nav-prev" onClick={prevStep}>
                    Previous Step
                  </button>
                )}
                <div style={{ marginLeft: "auto" }}>
                  {currentStep < 6 ? (
                    <button type="button" className="btn-nav-next" onClick={nextStep}>
                      Next Step
                    </button>
                  ) : (
                    <button type="submit" className="btn-nav-next" disabled={loading}>
                      {loading ? "Submitting Application..." : "Submit Full Application"}
                    </button>
                  )}
                </div>
              </div>

            </form>
          </>
        )}

      </div>
    </div>
  );
}
