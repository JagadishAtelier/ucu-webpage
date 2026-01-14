import { data } from 'framer-motion/client';
import React from 'react'
import { Button } from 'react-bootstrap';

const peopleData = [
  {
    image: "https://inc42.com/wp-content/uploads/2014/04/deep-kalra_mmt-200x300.jpg", // Deep Kalra
    name: "Deep Kalra",
    year: "PGP 1992",
    prof: "Founder & Group CEO – MakeMyTrip, Chairman IIMAEF Board"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/IndraNooyiDavos2010ver2.jpg/250px-IndraNooyiDavos2010ver2.jpg",
    name: "Indra Nooyi",
    year: "PGP 1980",
    prof: "Former CEO – PepsiCo, Member of Amazon Board"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_pichai.png/440px-Sundar_pichai.png",
    name: "Sundar Pichai",
    year: "BTech 1993",
    prof: "CEO – Google & Alphabet Inc."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Arundhati_Bhattacharya_-_Kolkata_2014-05-23_4312.JPG/250px-Arundhati_Bhattacharya_-_Kolkata_2014-05-23_4312.JPG",
    name: "Arundhati Bhattacharya",
    year: "PGP 1977",
    prof: "Chairperson & CEO – Salesforce India, Former Chairperson – SBI"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Raghuram_Rajan%2C_IMF_69MS040421048l.jpg/250px-Raghuram_Rajan%2C_IMF_69MS040421048l.jpg",
    name: "Raghuram Rajan",
    year: "PGP 1987",
    prof: "Former RBI Governor, Professor at University of Chicago"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kiran_Mazumdar-Shaw_HD2014_crop.jpg/250px-Kiran_Mazumdar-Shaw_HD2014_crop.jpg",
    name: "Kiran Mazumdar-Shaw",
    year: "PGP 1978",
    prof: "Executive Chairperson – Biocon Limited"
  }
];

function COEBenefactors() {
  return (
    <div className='captital-campus-content-sec mt-5'>
      <h1 className='text-center'>Our <span style={{ color: "#5ac501" }}>Benefactors</span></h1>
      <div className='coe-benfactor-d-grid mt-4'>
        {peopleData.map((item, index) => (
          <div key={index} title={item.name} className='d-flex align-items-center p-2 gap-4 coe-benfactor-grid-div shadow'>
            <img src={item.image} className='col-5' alt={item.name} style={{objectFit:"cover"}} />
            <div className='col-6'>
              <p className='fw-bold mb-1' style={{ color: "#5ac501" }}>{item.name}</p>
              <p className='mb-3' style={{ fontSize: '14px' }}>{item.year}</p>
              <p className='mb-0' style={{ fontSize: '16px' }}>{item.prof}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='d-flex flex-lg-row flex-column flex-md-row mt-5 gap-3 justify-content-center align-items-center'>
        <Button className='col-12 col-md-4 col-lg-3' style={{ backgroundColor: "#5ac501", border: "none" }}>DONATE </Button>
        <Button className='col-12 col-md-4 col-lg-3' style={{ backgroundColor: "#5ac501", border: "none" }}>View initiatives</Button>
      </div>
    </div>
  )
}

export default COEBenefactors