import React, { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import { ArrowDown, ChevronDown } from "lucide-react";
import { line } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ITEMS = [
  {
    id: "location",
    label: "Eligibility Criteria",
    icon: <FiMapPin size={20} />,
    title: "Eligibility Criteria",
    text:
`<p>All candidates for the Experience BU Summer School should be in an age group of 13-17. We’re open to all candidates who are curious and wish to discover more about the world around them and their future opportunities. A good command over English is a definite advantage, however what matters most is an open mind and a wish to learn, discover and make lasting memories.</p>`,
    link : "/campus-ambience"
  },
  {
    id: "pedagogy",
    label: "Program Fee",
    icon: <FiUsers size={20} />,
    title: "Program Fee",
    text:`
    <ol>
      <li class='fw-bold'>
      <p>₹ 75,000 plus taxes (Inclusive of accommodation charges)</p>
      </li>
      
      <li  class='fw-bold'>
      <p>Duration : Two Weeks</p>
      </li>

      <li  class='fw-bold'>
      <p>Mode : Regular on campus (Residential)</p>
      </li>

    </ol>
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
function SummerDetails() {
      const navigate = useNavigate()
  const [active, setActive] = useState("location");
  const [mobileOpen, setMobileOpen] = useState("location");

  const activeItem = ITEMS.find((i) => i.id === active) || ITEMS[0];

    const handleMobileToggle = (id) => {
    setMobileOpen((prev) => (prev === id ? null : id));
  };
  return (
    <div className='captital-campus-content-sec my-4 summer-details-container'>
        <h1 className='text-center mb-3'>Program Details</h1>
        <p>We are looking for students who are outgoing, curious, and wish to discover more about the world around them and the opportunities ahead. BU Summer School is open for students from Class 9th to 12th with a good command of English. However, what matters is an open mind and a wish to learn, discover, and create lasting memories. Apply Now</p>
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
        <div className="content-card p-4 shadow-sm">
          {/* <h3 className="content-title">{activeItem.title}</h3> */}
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

export default SummerDetails