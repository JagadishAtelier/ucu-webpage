// OurExperts.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const expertsData = [
  { name: "Alice Johnson",        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", },
  { name: "Bob Smith",         image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", },
  { name: "Catherine Lee",         image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e", },
  { name: "David Kim",         image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36", },
];

function OurExperts() {
    const navigate = useNavigate()
  return (
    <section className="ourExperts-section mt-5">
      <h2 className="ourExperts-title">Our Experts</h2>
      <div className="ourExperts-grid">
        {expertsData.map((expert, index) => (
          <div key={index} className="ourExperts-card shadow">
            <img src={expert.image} alt={expert.name} className="ourExperts-image" />
            <div className="ourExperts-overlay">
              <span className="ourExperts-name">{expert.name}</span>
            </div>
          </div>
        ))}
      </div>
      <Button onClick={()=>navigate("/bac")} className='mt-5'>View more</Button>
    </section>
  );
}

export default OurExperts;
