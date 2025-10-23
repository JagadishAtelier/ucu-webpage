import React, { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import { ArrowDown, ChevronDown } from "lucide-react";
import { line } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const ITEMS = [
  {
    id: "location",
    label: "Overview",
    icon: <FiMapPin size={20} />,
    head:"Admissions",
    title: "Future leaders start here.",
    text:
`<p>At MDI Gurgaon, we put all our experience and knowledge behind your career goals. From post graduate diploma programmes to executive post graduate and fellowship programmes to continuing executive education programmes, our integrated approach to research, learning and innovation is designed around you. A world of opportunity awaits!</p>`,
    link : "/campus-ambience"
  },
  {
    id: "pedagogy",
    label: "Fee Payment",
    icon: <FiUsers size={20} />,
    title: "Fee Payment",
    text:`
    <p>Instructions for Fee payment:</p>
    <ul>
      <li class='fw-bold'>
      <p>Ensure there are no blank spaces in your enrollment number.</p>
      </li>
      
      <li  class='fw-bold'>
      <p>Do not refresh the web page or navigate back after clicking 'pay now.'</p>
      </li>

      <li  class='fw-bold'>
      <p>Challan-based RTGS payments must be processed exclusively from bank branches. Do not add the virtual account number mentioned in the challan as a beneficiary in Netbanking.</p>
      </li>

      <li  class='fw-bold'>
      <p>The RTGS/NEFT fee transfer amount must match the amount specified in the challan. If the payment amount differs, the fee will be returned and deemed unpaid.</p>
      </li>

    </ul>
    <div class="d-grid">
    <div class='row gap-3'>
        <div class="adp-fee-payment-box col-5">
            <p>Advance Fees for PGDM-Business</p>
            <p>Management</p>
            <p>Click here to pay</p>
        </div>
        <div class="adp-fee-payment-box col-5">
            <p>Advance Fees for PGDM-Business</p>
            <p>Management</p>
            <p>Click here to pay</p>
        </div>
        <div class="adp-fee-payment-box col-5">
            <p>Advance Fees for PGDM-Business</p>
            <p>Management</p>
            <p>Click here to pay</p>
        </div>
        </div>
    </div>
    `,
    action: "Find out how",
        link : "/industry-approach"
  },
  {
    id: "placements",
    label: "Accommodation & Transport",
    icon: <FiBriefcase size={20} />,
    title: "Accommodation & Transport",
    text:
     `<p>Twin-sharing accommodation at the BU Campus Hostel.One-time pick-and-drop facility from the Airport/Railway Station can be arranged on request and at additional cost.</p>`,
    link:"/placements/recruiters"
  },
];
function AsmissionDetails() {
          const navigate = useNavigate()
      const [active, setActive] = useState("location");
      const [mobileOpen, setMobileOpen] = useState("location");
    
      const activeItem = ITEMS.find((i) => i.id === active) || ITEMS[0];
    
        const handleMobileToggle = (id) => {
        setMobileOpen((prev) => (prev === id ? null : id));
      };
  return (
    <div className='captital-campus-content-sec my-4'>
      <div className="d-flex gap-5">     
            <div className="col-12 col-lg-3">
        <div className="left-nav d-flex flex-column">
          {ITEMS.map((item) => {
            const isActive = item.id === active;
            const isOpen = mobileOpen === item.id;
            return (
              <div>
              <button
                key={item.id}
                className={` nav-pill d-lg-flex d-none align-items-center mb-3 p-3 ${isActive ? "active" : ""}`}
                onClick={() => setActive(item.id)}
                aria-pressed={isActive}
              >
                <div className="label">{item.label}</div>
              </button>
                <button
                  className={`nav-pill mob-nav-pill d-flex d-lg-none align-items-center justify-content-between w-100 p-3 ${isOpen ? "show" : ""}`}
                  onClick={() => handleMobileToggle(item.id)}
                >
                  <div className="d-flex align-items-center">
                    <div className="icon me-3">{item.icon}</div>
                    <div className="label">{item.label}</div>
                  </div>
                  <ChevronDown className={`transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`mobile-content bg-light p-3 mt-2 rounded shadow-sm d-lg-none ${
                    isOpen ? "show" : ""
                  }`}
                >
    <div
      className="content-text"
      dangerouslySetInnerHTML={{ __html: activeItem.text }}
    />
    {activeItem.action &&(
         <Button className='my-4 p-3' style={{backgroundColor:"#5ac501",border:"none",width:"fit-content"}}>{activeItem.action}</Button>
    )}
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    {/* Right Content   */}
      <div className="col-12 col-lg-8 d-none d-lg-block">
        <div className="adp-content-card p-4 ">
          <h3 className="content-title fs-1">{activeItem.head}</h3>
          <h3 className="content-title">{activeItem.title}</h3>
    <div
      className="content-text"
      dangerouslySetInnerHTML={{ __html: activeItem.text }}
    />
    {activeItem.action &&(
         <Button className='my-4 p-3' style={{backgroundColor:"#5ac501",border:"none",width:"fit-content"}}>{activeItem.action}</Button>
    )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default AsmissionDetails