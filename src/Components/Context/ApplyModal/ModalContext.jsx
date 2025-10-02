import React, { createContext, useContext, useState } from "react";
import './ModalContext.css'
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);

  const [country, setCountry] = useState("INDIAN"); // default active
  const [phoneCode, setPhoneCode] = useState("+91"); // default code

  const showModal = (type) => setModalType(type);
  const hideModal = () => setModalType(null);

  console.log("modalType state:", modalType);

  const handleCountryClick = (selected) => {
    setCountry(selected);
    setPhoneCode(selected === "INDIAN" ? "+91" : "+1"); // you can add more codes
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modalType && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button
              onClick={hideModal}
              className="cancel-icon"
            >
              ✖
            </button>

            {modalType === "apply" && (
              <div className="d-flex flex-column flex-lg-row gap-3 align-items-center align-items-lg-center">
                                <div className="modal-banner-div">
                <img src="https://amityonline.com/_s/Web_banners_ff9c85f386.webp"/>
                </div>
                <div className="modal-right-form d-flex flex-column flex-lg-column row-gap-3">
                <p className="fs-1 fw-100 col-lg-12 col-12 mb-0">Start Your <span style={{color:"#5ac501"}}>Application</span> Now</p>
                <p className="modal-para-text col-lg-8 col-12 mb-0">Please provide the information below, and our counsellor will get in touch with you.</p>
                <div className="d-flex flex-row flex-lg-row gap-3">
                <button onClick={() => handleCountryClick("INDIAN")} className={`py-lg-1 px-lg-3 py-2 px-2 contact-btn ${
                        country === "INDIAN" ? "active-btn" : ""
                      }`}>INDIAN</button>
                <button onClick={() => handleCountryClick("INTERNATIONAL")} className={`
                ${
                    country === "INTERNATIONAL" ? "active-btn" : ""
                  }
                py-lg-1 px-lg-3 py-2 px-2 contact-btn`}>INTERNATIONAL</button>
                </div>
                <form>
                    <div className="d-flex flex-column flex-lg-row flex-wrap gap-3 form-div">
                <div>
                <p className="mb-1 number-text-modal">phone number *</p>
                <div className="d-flex flex-row flex-lg-row gap-2 select-input-div">
                <select value={phoneCode} readOnly>
                            <option>{phoneCode}</option>
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
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border p-2 w-full mb-2"
                  />
                </div>
                <div>
                <p className="mb-1 number-text-modal">Email Id *</p>
                <input
                    type="text"
                    placeholder="Your Email"
                    className="border p-2 w-full mb-2"
                  />
                </div>
                </div>
                <div className="mt-2 mt-lg-2 d-flex flex-row flex-lg-row gap-2 align-items-start align-items-lg-start">
                    <input type="radio" className="input-radio-btn"/>
                    <p className="radio-btn-text">By entering these details I agree that Universal Corporate University Online and its associates can contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call as per the Privacy Policy. This consent will override any registration for DNC / NDNC.
                </p>
                </div>
                  <button className="submit-btn-modal px-lg-4 py-lg-2 py-3">
                    Submit Application
                  </button>
                </form>
                </div>
              </div>
            )}

            {modalType === "enquiry" && (
              <div className="d-flex flex-column flex-lg-row gap-3 align-items-center align-items-lg-center">
                <div className="modal-banner-div">
              <img src="https://www.annexorien.in/wp-content/uploads/2024/03/enquiry-min.jpg"/>
              </div>
              <div className="modal-right-form d-flex flex-column flex-lg-column row-gap-3">
              <p className="fs-1 fw-100 col-lg-12 col-12 mb-0">
Connect with our <span style={{color:"#5ac501"}}>counsellor</span></p>
              <p className="modal-para-text col-lg-8 col-12 mb-0">Please provide the information below, and our counsellor will get in touch with you.</p>
              <div className="d-flex flex-row flex-lg-row gap-3">
              <button onClick={() => handleCountryClick("INDIAN")} className={`py-lg-1 px-lg-3 py-2 px-2 contact-btn ${
                      country === "INDIAN" ? "active-btn" : ""
                    }`}>INDIAN</button>
              <button onClick={() => handleCountryClick("INTERNATIONAL")} className={`
              ${
                  country === "INTERNATIONAL" ? "active-btn" : ""
                }
              py-lg-1 px-lg-3 py-2 px-2 contact-btn`}>INTERNATIONAL</button>
              </div>
              <form>
                  <div className="d-flex flex-column flex-lg-row flex-wrap gap-3 form-div">
              <div>
              <p className="mb-1 number-text-modal">phone number *</p>
              <div className="d-flex flex-row flex-lg-row gap-2 select-input-div">
              <select value={phoneCode} readOnly>
                          <option>{phoneCode}</option>
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
              <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-2 w-full mb-2"
                />
              </div>
              <div>
              <p className="mb-1 number-text-modal">Email Id *</p>
              <input
                  type="text"
                  placeholder="Your Email"
                  className="border p-2 w-full mb-2"
                />
              </div>
              </div>
              <div className="mt-2 mt-lg-2 d-flex flex-row flex-lg-row gap-2 align-items-start align-items-lg-start">
                  <input type="radio" className="input-radio-btn"/>
                  <p className="radio-btn-text">By entering these details I agree that Universal Corporate University Online and its associates can contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call as per the Privacy Policy. This consent will override any registration for DNC / NDNC.
              </p>
              </div>
                <button className="submit-btn-modal px-lg-4 py-lg-2 py-3">
                  Submit Application
                </button>
              </form>
              </div>
            </div>
            )}

            {modalType === "brochure" && (
              <div className="d-flex flex-column flex-lg-row gap-3 align-items-center align-items-lg-center">
                              <div className="modal-banner-div">
              <img src="https://img.freepik.com/free-photo/handsome-male-entrepreneur-using-laptop_176420-17902.jpg?semt=ais_hybrid&w=740&q=80"/>
              </div>
              <div className="modal-right-form d-flex flex-column flex-lg-column row-gap-3">
              <p className="fs-1 fw-100 col-lg-12 col-12 mb-0">
Download <span style={{color:"#5ac501"}}>Brochure</span></p>
              <p className="modal-para-text col-lg-8 col-12 mb-0">Fill in your details here and download a detailed brochure of the program</p>
              <div className="d-flex flex-row flex-lg-row gap-3">
              <button onClick={() => handleCountryClick("INDIAN")} className={`py-lg-1 px-lg-3 py-2 px-2 contact-btn ${
                      country === "INDIAN" ? "active-btn" : ""
                    }`}>INDIAN</button>
              <button onClick={() => handleCountryClick("INTERNATIONAL")} className={`
              ${
                  country === "INTERNATIONAL" ? "active-btn" : ""
                }
              py-lg-1 px-lg-3 py-2 px-2 contact-btn`}>INTERNATIONAL</button>
              </div>
              <form>
                  <div className="d-flex flex-column flex-lg-row flex-wrap gap-3 form-div">
              <div>
              <p className="mb-1 number-text-modal">phone number *</p>
              <div className="d-flex flex-row flex-lg-row gap-2 select-input-div">
              <select value={phoneCode} readOnly>
                          <option>{phoneCode}</option>
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
              <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-2 w-full mb-2"
                />
              </div>
              <div>
              <p className="mb-1 number-text-modal">Email Id *</p>
              <input
                  type="text"
                  placeholder="Your Email"
                  className="border p-2 w-full mb-2"
                />
              </div>
              </div>
              <div className="mt-2 mt-lg-2 d-flex flex-row flex-lg-row gap-2 align-items-start align-items-lg-start">
                  <input type="radio" className="input-radio-btn"/>
                  <p className="radio-btn-text">By entering these details I agree that Universal Corporate University Online and its associates can contact me with updates & notifications via Email, SMS, WhatsApp, and Voice call as per the Privacy Policy. This consent will override any registration for DNC / NDNC.
              </p>
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
