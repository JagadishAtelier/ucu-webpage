import React from 'react';
import {
  UserCheck,
  MapPin,
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp
} from "lucide-react";

function SalesDiplamoPageWho() {
const eligibilityCriteria = [
  {
    text: "One on one mentorship by professionals from leading corporates",
    icon: <UserCheck size={22} />
  },
  {
    text: "Field visit opportunities to learn by applying",
    icon: <MapPin size={22} />
  },
  {
    text: "75% of the course delivered by Professors of Practice and industry professionals to emphasize on real world knowledge",
    icon: <Briefcase size={22} />
  },
  {
    text: "Academicians from leading institutes in India and abroad",
    icon: <GraduationCap size={22} />
  },
  {
    text: "Rich peer learning facilitated by a diverse batch",
    icon: <Users size={22} />
  },
  {
    text: "Promising career opportunities assisted by the institute in the field of Sales",
    icon: <TrendingUp size={22} />
  }
];


  return (
    <section className="pb-lg-5 pb-0 pt-0">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="">Salient features of the program</h3>
          </div>
        </div>
        
        <div className="row g-4 justify-content-center">
          {eligibilityCriteria.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className={`CRPFWPP-glass-card CRPFWPP-card-delay-${index}`}>
                <div className="CRPFWPP-card-header">
                  <div className="CRPFWPP-number-blob">{item.icon}</div>
                </div>
                <div className="CRPFWPP-card-body">
                  <p className="CRPFWPP-description">{item.text}</p>
                </div>
                <div className="CRPFWPP-card-footer"></div>
              </div>
            </div>
          ))}
        </div>
        <p className='mt-5'>
            Our mentors and SMEs come from leading corporates to hand-hold our students and maximise employability
        </p>
      </div>
    </section>
  );
}

export default SalesDiplamoPageWho;