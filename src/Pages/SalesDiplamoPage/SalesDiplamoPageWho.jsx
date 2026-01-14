import React from 'react';
import {
  UserCheck,
  MapPin,
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp
} from "lucide-react";
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css"; // Reuse vibrant styles

function SalesDiplamoPageWho() {
  const features = [
    {
      text: "One on one mentorship by professionals from leading corporates",
      icon: <UserCheck size={28} />,
      theme: "theme-blue"
    },
    {
      text: "Field visit opportunities to learn by applying",
      icon: <MapPin size={28} />,
      theme: "theme-orange"
    },
    {
      text: "75% of the course delivered by Professors of Practice",
      icon: <Briefcase size={28} />,
      theme: "theme-purple"
    },
    {
      text: "Academicians from leading institutes in India and abroad",
      icon: <GraduationCap size={28} />,
      theme: "theme-green"
    },
    {
      text: "Rich peer learning facilitated by a diverse batch",
      icon: <Users size={28} />,
      theme: "theme-blue"
    },
    {
      text: "Promising career opportunities assisted by the institute",
      icon: <TrendingUp size={28} />,
      theme: "theme-orange"
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-left">
            <h3 className="section-heading"><span style={{color:"#5ac501ff"}}>Salient Features</span> of the Program</h3>
            {/* <div className="mx-auto mt-3" style={{ maxWidth: '700px', height: '4px', background: 'linear-gradient(90deg, #0d6efd, #198754)' }}></div> */}
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {features.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className={`PGPMFLEX-admission-eligible-card ${item.theme} h-100`}>
                <div className="PGPMFLEX-card-body d-flex flex-column align-items-center text-center pt-5">
                  <div className="PGPMFLEX-footer-icon mb-4" style={{ width: '60px', height: '60px', borderRadius: '50%' }}>
                    {item.icon}
                  </div>
                  <p className="PGPMFLEX-card-desc fs-5 fw-medium text-dark mb-0">
                    {item.text}
                  </p>
                </div>
                <div className="PGPMFLEX-card-footer justify-content-center bg-transparent border-0 pb-4">
                  {/* Decorative element */}
                  <div style={{ width: '40px', height: '4px', background: 'currentColor', opacity: 0.2, borderRadius: '2px' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center p-4 rounded-4" style={{ background: '#f8f9fa', border: '1px dashed #ced4da' }}>
          <p className="lead mb-0 text-secondary">
            Our mentors and SMEs come from leading corporates to hand-hold our students and maximise employability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SalesDiplamoPageWho;