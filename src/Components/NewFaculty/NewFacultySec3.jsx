import React, { useState, useRef } from "react";
import "./NewFac.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const departments = [
  {
    title: "Accounting",
    data: [
      {
        name: "Laura Zoni",
        prof: "Affiliate Professor Management Control System",
        image: "https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/laura_zoni_cv.jpg",
      },
    ],
  },
  {
    title: "Economics, Politics and Decision Sciences",
    data: [
      {
        name: "Alessandro Recla",
        prof: "Fellow\nBusiness Data Analytics",
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/alessandro_recla_cv.jpg",
      },
      {
        name: "Daniele Tonini",
        prof: "Lecturer\nBusiness Data Analytics",
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/daniele_tonini_cv.jpg",
      },
      {
        name: "Italo Colantone",
        prof: "Associate Professor\nEconomics",
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/colantone_thunmbail.jpg",
      },
      {
        name: "Luca Molteni",
        prof: `Assistant Professor
        Business Data Analytics`,
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/05/luca_molteni_cv.jpg",
      },
      {
        name: "Marco Merelli",
        prof: `Senior Lecturer
        Economics`,
        image:
          "	https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/marco_merelli_cv.jpg",
      },
      {
        name: "Michele Russo",
        prof: `Fellow
        Business Data Analytics`,
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/michele_russo_headshot.jpg",
      },
    ],
  },
  {
    title: "Finance",
    data: [
      {
        name: "Giampaolo Gabbi",
        prof: "Professor of Practice Audit & Risk Management",
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/alessandro_recla_cv.jpg",
      },
      {
        name: "Leonardo Luca Etro",
        prof: `Dean, SDA Bocconi Asia Center
        Associate Professor of Practice
        M&A and Restructuring`,
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/daniele_tonini_cv.jpg",
      },
      {
        name: "Leonella Gori",
        prof: `Lecturer
        Corporate Finance`,
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/colantone_thunmbail.jpg",
      },
      {
        name: "Mariano Massimiliano Croce",
        prof: `Assistant Professor
        Business Data Analytics`,
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/05/luca_molteni_cv.jpg",
      },
    ],
  },
  {
    title: "Government, Health and Not for Profit",
    data: [
      {
        name: "Giampaolo Gabbi",
        prof: "Professor of Practice Audit & Risk Management",
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/alessandro_recla_cv.jpg",
      },
      {
        name: "Leonardo Luca Etro",
        prof: `Dean, SDA Bocconi Asia Center
        Associate Professor of Practice
        M&A and Restructuring`,
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/daniele_tonini_cv.jpg",
      },
    ],
  },
  {
    title: "Leadership, Human Resources and Digital Technologies",
    data: [
      {
        name: "Giampaolo Gabbi",
        prof: "Professor of Practice Audit & Risk Management",
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/alessandro_recla_cv.jpg",
      },
      {
        name: "Leonardo Luca Etro",
        prof: `Dean, SDA Bocconi Asia Center
        Associate Professor of Practice
        M&A and Restructuring`,
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/daniele_tonini_cv.jpg",
      },
    ],
  },
  {
    title: "Marketing",
    data: [
      {
        name: "Giampaolo Gabbi",
        prof: "Professor of Practice Audit & Risk Management",
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/alessandro_recla_cv.jpg",
      },
      {
        name: "Leonardo Luca Etro",
        prof: `Dean, SDA Bocconi Asia Center
        Associate Professor of Practice
        M&A and Restructuring`,
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/daniele_tonini_cv.jpg",
      },
    ],
  },
  {
    title: "Strategy and Operations",
    data: [
      {
        name: "Giampaolo Gabbi",
        prof: "Professor of Practice Audit & Risk Management",
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/alessandro_recla_cv.jpg",
      },
      {
        name: "Leonardo Luca Etro",
        prof: `Dean, SDA Bocconi Asia Center
        Associate Professor of Practice
        M&A and Restructuring`,
        image:
          "https://sdabocconiasiacenter.com/wp-content/uploads/2025/04/daniele_tonini_cv.jpg",
      },
    ],
  },
];

const FacultyPairCard = ({ pair }) => {
    const navigate = useNavigate();

    const handleGoToCV = (faculty) => {
        navigate("/profile/details", { state: faculty }); 
      };
    return(
        <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center p-3 rounded shadow-sm bg-color-card mb-4 mx-lg-4">
        {pair.map((faculty, i) => (
          <div
            key={i}
            className="card-width-fac d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="rounded-circle me-md-3 mb-2 mb-md-0 director-img"
            />
            <div className="mt-4 text-center text-lg-start">
              <h5 className="mb-1">{faculty.name}</h5>
              <p className="text-muted mb-1 white-space-pre-line">{faculty.prof}</p>
              <button
              className="btn btn-link text-decoration-none p-0"
              onClick={() => handleGoToCV(faculty)}
            >
              GO TO CV
            </button>
            </div>
          </div>
        ))}
      </div>
    )
        }

const DepartmentSection = ({ department, isOpen, onToggle }) => {
  const pairs = [];
  for (let i = 0; i < department.data.length; i += 2) {
    pairs.push(department.data.slice(i, i + 2));
  }

  const contentRef = useRef(null);

  return (
    <div className="my-4 w-100">
      <button
        onClick={onToggle}
        className="dept-btn border-0 w-100 p-4 bg-light rounded d-flex justify-content-between align-items-center fw-lg-bold fs-5 fs-lg-3 "
      >
        {department.title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden bg-light transition-section"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
        }}
      >
        {pairs.map((pair, idx) => (
          <FacultyPairCard key={idx} pair={pair} />
        ))}
      </div>
    </div>
  );
};

function NewFacultySec3() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-lg-5 mt-5 text-center text-lg-start mx-lg-5">
      <h1 className="display-4">The Faculty</h1>
      {departments.map((dept, idx) => (
        <DepartmentSection
          key={idx}
          department={dept}
          isOpen={openIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
}

export default NewFacultySec3;
