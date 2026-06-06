import React from "react";
import { MailCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LCPContact() {
  const navigate = useNavigate();

  return (
    <div className="LCPContact-wrapper mt-5 text-center">
      <button
        type="button"
        className="LCPContact-submitBtn d-inline-flex align-items-center justify-content-center gap-2"
        onClick={() => navigate("/contact-us")}
      >
        <MailCheck size={20} />
        Contact Us
      </button>
    </div>
  );
}

export default LCPContact;
