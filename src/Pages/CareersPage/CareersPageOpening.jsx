import { ArrowRight } from 'lucide-react';
import React from 'react';

const data = [
  {
    image: "https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg?w=740&q=80",
    header: "Academic Openings",
    para: "Explore exciting career opportunities at UCU! Join a global institution fostering excellence, innovation, and growth.",
  },
  {
    image: "https://img.freepik.com/premium-photo/cheerful-indian-asian-young-group-college-students-friends-laughing-together-while-sitting-standing-walking-campus_466689-8627.jpg?w=740&q=80",
    header: "Non-Academic Openings",
    para: "Explore exciting career opportunities at UCU! Join a global institution fostering excellence, innovation, and growth.",
  },
];

function CareersPageOpening() {
  return (
    <div className="captital-campus-content-sec mt-5">
      <h1 className='display-5 fw-bold'>Current <span style={{color:"#5ac501"}}> Job Openings </span></h1>
      <div className="d-flex flex-column flex-lg-row gap-3">
        {data.map((item, index) => (
          <div key={index} className="cpo-data-div rounded">
            <div className="cpo-image-container">
              <img src={item.image} alt={item.header} className='rounded'/>
              <div className="cpo-overlay rounded"></div>
              <div className="cpo-data-header-div">
                <p>{item.header}</p>
                <ArrowRight />
              </div>
            </div>
            <p className="cpo-data-para rounded">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareersPageOpening;
