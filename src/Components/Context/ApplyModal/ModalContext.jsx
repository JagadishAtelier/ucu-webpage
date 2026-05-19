import React, { createContext, useContext, useState } from "react";
import './ModalContext.css'
import emailjs from "emailjs-com";

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);

  const [country, setCountry] = useState("INDIAN");
  const [phoneCode, setPhoneCode] = useState("+91");

  // ADDED States for Google Form
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Stateful Multiphase Form States
  const [step, setStep] = useState(1);
  const [program, setProgram] = useState("");
  const [qualification, setQualification] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [city, setCity] = useState("");

  // Detailed Step 2 States
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [score10, setScore10] = useState("");
  const [score12, setScore12] = useState("");
  const [scoreGrad, setScoreGrad] = useState("");
  const [entranceScore, setEntranceScore] = useState("");

  const showModal = (type) => setModalType(type);
  const hideModal = () => {
    setModalType(null);
    setStep(1); // Always reset back to Step 1
  };

  const handleCountryClick = (selected) => {
    setCountry(selected);
    setPhoneCode(selected === "INDIAN" ? "+91" : "+1");
  };

  // YOUR GOOGLE SHEET URL
  const GOOGLE_API =
  "https://script.google.com/macros/s/AKfycbyfaLPhqHBG8ANOIMfuFn7eX5xTqmFaPzaTNyaS1VE_yTZhvNoQXO5bC2JXCLsqvW4i/exec";

  // STEP 1: START APPLICATION SUBMIT
  const handleStartApplication = async (e) => {
    e.preventDefault();

    if (!phoneNumber || !fullName || !email || !program || !qualification || !workExperience || !city) {
      alert("Please fill in all the required fields.");
      return;
    }

    const payload = {
      status: "Basic Lead Captured",
      country,
      phoneCode,
      phoneNumber,
      fullName,
      email,
      program,
      qualification,
      workExperience,
      city,
    };

    // background submit step 1 data
    try {
      fetch(GOOGLE_API, {
        method: "POST",
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Error submitting basic lead:", err);
    }

    // Go to step 2
    setStep(2);
  };

  // STEP 2: DETAILED APPLICATION SUBMIT
  const handleFinalSubmit = async (e) => {
    e.preventDefault();

    if (!dob || !gender || !guardianName || !score10 || !score12) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = {
      status: "Full Application Submitted",
      country,
      phoneCode,
      phoneNumber,
      fullName,
      email,
      program,
      qualification,
      workExperience,
      city,
      dob,
      gender,
      guardianName,
      score10,
      score12,
      scoreGrad,
      entranceScore,
    };

    try {
      await fetch(GOOGLE_API, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      alert("Detailed Application Submitted Successfully!");

      // Reset all fields
      setPhoneNumber("");
      setFullName("");
      setEmail("");
      setProgram("");
      setQualification("");
      setWorkExperience("");
      setCity("");
      setDob("");
      setGender("");
      setGuardianName("");
      setScore10("");
      setScore12("");
      setScoreGrad("");
      setEntranceScore("");
      setStep(1);
      hideModal();

    } catch (err) {
      console.error("Error submitting detailed application:", err);
      alert("Submission failed. Try again.");
    }
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}

      {modalType && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button onClick={hideModal} className="cancel-icon">✖</button>

            {/* APPLY FORM (GOOGLE SUBMIT) */}
            {modalType === "apply" && (
              <div className="d-flex flex-column flex-lg-row gap-3 align-items-center align-items-lg-center">
                <div className="modal-banner-div">
                  <img src="https://amityonline.com/_s/Web_banners_ff9c85f386.webp" />
                </div>

                <div className="modal-right-form d-flex flex-column row-gap-3">
                  <p className="fs-1 fw-100 mb-0">
                    {step === 1 ? (
                      <>Start Your <span style={{ color: "#5ac501" }}>Application</span> Now</>
                    ) : (
                      <>Academic & <span style={{ color: "#5ac501" }}>Personal</span> Details</>
                    )}
                  </p>
                  <p className="modal-para-text col-lg-8 col-12 mb-0">
                    {step === 1 
                      ? "Please provide the information below, and our counsellor will get in touch with you."
                      : "Please fill out your detailed background info below to proceed."
                    }
                  </p>

                  {step === 1 && (
                    <>
                      <div className="d-flex flex-row gap-3">
                        <button
                          onClick={() => handleCountryClick("INDIAN")}
                          className={`py-lg-1 px-lg-3 py-2 px-2 contact-btn ${country === "INDIAN" ? "active-btn" : ""}`}
                        >
                          INDIAN
                        </button>

                        <button
                          onClick={() => handleCountryClick("INTERNATIONAL")}
                          className={`py-lg-1 px-lg-3 py-2 px-2 contact-btn ${country === "INTERNATIONAL" ? "active-btn" : ""}`}
                        >
                          INTERNATIONAL
                        </button>
                      </div>

                      {/* APPLY FORM WITH GOOGLE SUBMIT - STEP 1 */}
                      <form onSubmit={handleStartApplication}>
                        <div className="d-flex flex-column flex-lg-row flex-wrap gap-3 form-div">

                          {/* PHONE NUMBER */}
                          <div>
                            <p className="mb-1 number-text-modal">phone number *</p>
                            <div className="d-flex flex-row gap-2 select-input-div">
                              <select value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)}>
                                {country === "INDIAN" ? (
                                  <option value="+91">+91 (India)</option>
                                ) : (
                                  <>
                                    <option value="+1">+1 (USA/Canada)</option>
                                    <option value="+44">+44 (UK)</option>
                                    <option value="+61">+61 (Australia)</option>
                                    <option value="+65">+65 (Singapore)</option>
                                    <option value="+971">+971 (UAE)</option>
                                    <option value="+60">+60 (Malaysia)</option>
                                    <option value="+81">+81 (Japan)</option>
                                    <option value="+49">+49 (Germany)</option>
                                    <option value="+33">+33 (France)</option>
                                  </>
                                )}
                              </select>

                              <input
                                type="text"
                                placeholder="Your Number"
                                className="border p-2 w-full mb-2 number-input-modal"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* FULL NAME */}
                          <div>
                            <p className="mb-1 number-text-modal">Full name *</p>
                            <input
                              type="text"
                              placeholder="Your Name"
                              className="border p-2 w-full mb-2"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </div>

                          {/* EMAIL */}
                          <div>
                            <p className="mb-1 number-text-modal">Email Id *</p>
                            <input
                              type="email"
                              placeholder="Your Email"
                              className="border p-2 w-full mb-2"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          {/* PROGRAM OF INTEREST */}
                          <div>
                            <p className="mb-1 number-text-modal">Program of Interest *</p>
                            <select
                              value={program}
                              onChange={(e) => setProgram(e.target.value)}
                              style={{ width: "100%" }}
                            >
                              <option value="">Select Program</option>
                              <option value="PGDM (Young Leaders Program)">PGDM | Young Leaders' Program</option>
                              <option value="PGPM ELITE (Career Accelerator)">PGPM ELITE | Career Accelerator Program</option>
                              <option value="PGPM Flex">PGPM Flex</option>
                              <option value="PGXPM">PGXPM</option>
                              <option value="Sales Diploma">Sales Diploma</option>
                              <option value="Career Reboot Program for Women">Career Reboot Program for Women</option>
                              <option value="Digital Marketing & AI">Digital Marketing & AI</option>
                              <option value="Product Management">Product Management</option>
                              <option value="Cybersecurity">Cybersecurity</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          {/* HIGHEST QUALIFICATION */}
                          <div>
                            <p className="mb-1 number-text-modal">Highest Qualification *</p>
                            <select
                              value={qualification}
                              onChange={(e) => setQualification(e.target.value)}
                              style={{ width: "100%" }}
                            >
                              <option value="">Select Qualification</option>
                              <option value="Undergraduate Student">Undergraduate Student</option>
                              <option value="Graduate / Bachelor Degree">Graduate / Bachelor's Degree</option>
                              <option value="Postgraduate / Master Degree">Postgraduate / Master's Degree</option>
                              <option value="Class 12 / Higher Secondary">Class 12 / Higher Secondary</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          {/* WORK EXPERIENCE */}
                          <div>
                            <p className="mb-1 number-text-modal">Work Experience *</p>
                            <select
                              value={workExperience}
                              onChange={(e) => setWorkExperience(e.target.value)}
                              style={{ width: "100%" }}
                            >
                              <option value="">Select Experience</option>
                              <option value="Fresher">Fresher (No experience)</option>
                              <option value="Less than 1 year">Less than 1 year</option>
                              <option value="1-2 years">1-2 years</option>
                              <option value="3-5 years">3-5 years</option>
                              <option value="5+ years">5+ years</option>
                            </select>
                          </div>

                          {/* CURRENT CITY */}
                          <div>
                            <p className="mb-1 number-text-modal">Current City *</p>
                            <input
                              type="text"
                              placeholder="Your Current City"
                              className="border p-2 w-full mb-2"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>

                        </div>

                        <div className="mt-2">
                          <label className="d-flex align-items-start">
                            <input type="radio" className="input-radio-btn" />
                            <span className="radio-btn-text ms-2">
                              By entering these details I agree that Universal Corporate University
                              Online and its associates can contact me with updates & notifications via
                              Email, SMS, WhatsApp, and Voice call as per the Privacy Policy. This
                              consent will override any registration for DNC / NDNC.
                            </span>
                          </label>
                        </div>

                        <button type="submit" className="submit-btn-modal px-lg-4 py-lg-2 py-3 mt-3">
                          Start Application
                        </button>
                      </form>
                    </>
                  )}

                  {step === 2 && (
                    /* DETAILED FORM - STEP 2 */
                    <form onSubmit={handleFinalSubmit}>
                      <div className="d-flex flex-column flex-lg-row flex-wrap gap-3 form-div">

                        {/* DATE OF BIRTH */}
                        <div>
                          <p className="mb-1 number-text-modal">Date of Birth *</p>
                          <input
                            type="date"
                            className="border p-2 w-full mb-2"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                          />
                        </div>

                        {/* GENDER */}
                        <div>
                          <p className="mb-1 number-text-modal">Gender *</p>
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            style={{ width: "100%" }}
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                          </select>
                        </div>

                        {/* GUARDIAN NAME */}
                        <div>
                          <p className="mb-1 number-text-modal">Father's / Guardian's Name *</p>
                          <input
                            type="text"
                            placeholder="Father's / Guardian's Name"
                            className="border p-2 w-full mb-2"
                            value={guardianName}
                            onChange={(e) => setGuardianName(e.target.value)}
                          />
                        </div>

                        {/* 10TH SCORE */}
                        <div>
                          <p className="mb-1 number-text-modal">10th Class Score (%) *</p>
                          <input
                            type="number"
                            step="0.01"
                            placeholder="e.g. 85.5"
                            className="border p-2 w-full mb-2"
                            value={score10}
                            onChange={(e) => setScore10(e.target.value)}
                          />
                        </div>

                        {/* 12TH SCORE */}
                        <div>
                          <p className="mb-1 number-text-modal">12th Class Score (%) *</p>
                          <input
                            type="number"
                            step="0.01"
                            placeholder="e.g. 88.0"
                            className="border p-2 w-full mb-2"
                            value={score12}
                            onChange={(e) => setScore12(e.target.value)}
                          />
                        </div>

                        {/* GRADUATION SCORE */}
                        <div>
                          <p className="mb-1 number-text-modal">Graduation Score (%)</p>
                          <input
                            type="number"
                            step="0.01"
                            placeholder="e.g. 78.2"
                            className="border p-2 w-full mb-2"
                            value={scoreGrad}
                            onChange={(e) => setScoreGrad(e.target.value)}
                          />
                        </div>

                        {/* ENTRANCE EXAM */}
                        <div>
                          <p className="mb-1 number-text-modal">Entrance Score (Optional)</p>
                          <input
                            type="text"
                            placeholder="e.g. CAT 95%ile"
                            className="border p-2 w-full mb-2"
                            value={entranceScore}
                            onChange={(e) => setEntranceScore(e.target.value)}
                          />
                        </div>

                      </div>

                      <div className="d-flex flex-row gap-3 mt-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="submit-btn-modal px-lg-4 py-lg-2 py-3"
                          style={{ backgroundColor: "#6c757d", borderColor: "#6c757d" }}
                        >
                          Back
                        </button>
                        <button type="submit" className="submit-btn-modal px-lg-4 py-lg-2 py-3">
                          Submit Application
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}

            {/* ENQUIRY (NO GOOGLE SUBMIT) */}
            {modalType === "enquiry" && (
              <div className="d-flex flex-column flex-lg-row gap-3 align-items-center">
                <div className="modal-banner-div">
                  <img src="https://www.annexorien.in/wp-content/uploads/2024/03/enquiry-min.jpg" />
                </div>

                <div className="modal-right-form d-flex flex-column row-gap-3">
                  <p className="fs-1 fw-100 mb-0">
                    Connect with our <span style={{ color: "#5ac501" }}>counsellor</span>
                  </p>

                  <p className="modal-para-text col-lg-8 col-12 mb-0">
                    Please provide the information below.
                  </p>

                  <div className="d-flex flex-row gap-3">
                    <button
                      onClick={() => handleCountryClick("INDIAN")}
                      className={`py-lg-1 px-lg-3 py-2 px-2 contact-btn ${country === "INDIAN" ? "active-btn" : ""}`}
                    >
                      INDIAN
                    </button>

                    <button
                      onClick={() => handleCountryClick("INTERNATIONAL")}
                      className={`py-lg-1 px-lg-3 py-2 px-2 contact-btn ${country === "INTERNATIONAL" ? "active-btn" : ""}`}
                    >
                      INTERNATIONAL
                    </button>
                  </div>

                  {/* NO-GOOGLE SUBMIT FORM */}
                  <form>
                    <div className="d-flex flex-column flex-lg-row flex-wrap gap-3 form-div">

                      <div>
                        <p className="mb-1 number-text-modal">phone number *</p>
                        <div className="d-flex flex-row gap-2 select-input-div">
                          <select value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)}>
                            {country === "INDIAN" ? (
                              <option value="+91">+91 (India)</option>
                            ) : (
                              <>
                                <option value="+1">+1 (USA/Canada)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+61">+61 (Australia)</option>
                                <option value="+65">+65 (Singapore)</option>
                                <option value="+971">+971 (UAE)</option>
                                <option value="+60">+60 (Malaysia)</option>
                                <option value="+81">+81 (Japan)</option>
                                <option value="+49">+49 (Germany)</option>
                                <option value="+33">+33 (France)</option>
                              </>
                            )}
                          </select>

                          <input
                            type="text"
                            placeholder="Your Number"
                            className="border p-2 w-full mb-2 number-input-modal"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 number-text-modal">Full name *</p>
                        <input type="text" placeholder="Your Name" className="border p-2 w-full mb-2" />
                      </div>

                      <div>
                        <p className="mb-1 number-text-modal">Email Id *</p>
                        <input type="text" placeholder="Your Email" className="border p-2 w-full mb-2" />
                      </div>
                    </div>

                    <div className="mt-2">
  <label className="d-flex align-items-start">
    <input type="radio" className="input-radio-btn" />
    <span className="radio-btn-text ms-2">
      By entering these details I agree that Universal Corporate University
      Online and its associates can contact me with updates & notifications via
      Email, SMS, WhatsApp, and Voice call as per the Privacy Policy. This
      consent will override any registration for DNC / NDNC.
    </span>
  </label>
</div>


                    <button className="submit-btn-modal px-lg-4 py-lg-2 py-3">
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* BROCHURE (NO GOOGLE SUBMIT) */}
            {modalType === "brochure" && (
              <div className="d-flex flex-column flex-lg-row gap-3 align-items-center">
                <div className="modal-banner-div">
                  <img src="https://img.freepik.com/free-photo/handsome-male-entrepreneur-using-laptop_176420-17902.jpg" />
                </div>

                <div className="modal-right-form d-flex flex-column row-gap-3">
                  <p className="fs-1 fw-100 mb-0">
                    Download <span style={{ color: "#5ac501" }}>Brochure</span>
                  </p>
                  <p className="modal-para-text col-lg-8 col-12 mb-0">
                    Fill in your details here.
                  </p>

                  <div className="d-flex flex-row gap-3">
                    <button
                      onClick={() => handleCountryClick("INDIAN")}
                      className={`py-lg-1 px-lg-3 py-2 px-2 contact-btn ${country === "INDIAN" ? "active-btn" : ""}`}
                    >
                      INDIAN
                    </button>

                    <button
                      onClick={() => handleCountryClick("INTERNATIONAL")}
                      className={`py-lg-1 px-lg-3 py-2 px-2 contact-btn ${country === "INTERNATIONAL" ? "active-btn" : ""}`}
                    >
                      INTERNATIONAL
                    </button>
                  </div>

                  {/* NO GOOGLE SUBMIT */}
                  <form>
                    <div className="d-flex flex-column flex-lg-row flex-wrap gap-3 form-div">

                      <div>
                        <p className="mb-1 number-text-modal">phone number *</p>
                        <div className="d-flex flex-row gap-2 select-input-div">
                          <select value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)}>
                            {country === "INDIAN" ? (
                              <option value="+91">+91 (India)</option>
                            ) : (
                              <>
                                <option value="+1">+1 (USA/Canada)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+61">+61 (Australia)</option>
                                <option value="+65">+65 (Singapore)</option>
                                <option value="+971">+971 (UAE)</option>
                                <option value="+60">+60 (Malaysia)</option>
                                <option value="+81">+81 (Japan)</option>
                                <option value="+49">+49 (Germany)</option>
                                <option value="+33">+33 (France)</option>
                              </>
                            )}
                          </select>

                          <input
                            type="text"
                            placeholder="Your Number"
                            className="border p-2 w-full mb-2 number-input-modal"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 number-text-modal">Full name *</p>
                        <input type="text" placeholder="Your Name" className="border p-2 w-full mb-2" />
                      </div>

                      <div>
                        <p className="mb-1 number-text-modal">Email Id *</p>
                        <input type="text" placeholder="Your Email" className="border p-2 w-full mb-2" />
                      </div>

                    </div>

                    <div className="mt-2">
  <label className="d-flex align-items-start">
    <input type="radio" className="input-radio-btn" />
    <span className="radio-btn-text ms-2">
      By entering these details I agree that Universal Corporate University
      Online and its associates can contact me with updates & notifications via
      Email, SMS, WhatsApp, and Voice call as per the Privacy Policy. This
      consent will override any registration for DNC / NDNC.
    </span>
  </label>
</div>



                <button className="submit-btn-modal px-lg-4 py-lg-2 py-3">
                  Submit Application
                </button>

                  </form>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
