import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import './WhatsAppButton.css'
function WhatsAppButton() {
  return (
    <div>
          <a
      href="https://wa.me/919876543210"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>

    </div>
  )
}

export default WhatsAppButton
