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

  const showModal = (type) => setModalType(type);
  const hideModal = () => setModalType(null);

  const handleCountryClick = (selected) => {
    setCountry(selected);
    setPhoneCode(selected === "INDIAN" ? "+91" : "+1");
  };

  // YOUR GOOGLE SHEET URL
  const GOOGLE_API =
  "https://script.google.com/macros/s/AKfycbyfaLPhqHBG8ANOIMfuFn7eX5xTqmFaPzaTNyaS1VE_yTZhvNoQXO5bC2JXCLsqvW4i/exec";


  // ONLY APPLY FORM SUBMITS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      country,
      phoneCode,
      phoneNumber,
      fullName,
      email,
    };
    

    try {
      await fetch(GOOGLE_API, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      alert("Application Submitted Successfully!");

      // reset fields
      setPhoneNumber("");
      setFullName("");
      setEmail("");

    } catch (err) {
      console.error("Error submitting:", err);
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
                    Start Your <span style={{ color: "#5ac501" }}>Application</span> Now
                  </p>
                  <p className="modal-para-text col-lg-8 col-12 mb-0">
                    Please provide the information below, and our counsellor will get in touch with you.
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

                  {/* APPLY FORM WITH GOOGLE SUBMIT */}
                  <form onSubmit={handleSubmit}>
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


                    <button type="submit" className="submit-btn-modal px-lg-4 py-lg-2 py-3">
                      Submit Application
                    </button>
                  </form>
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
