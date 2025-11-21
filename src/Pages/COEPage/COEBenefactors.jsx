import { data } from 'framer-motion/client';
import React from 'react'
import { Button } from 'react-bootstrap';

const peopleData = [
  {
    image: "https://endowment.iima.ac.in/wp-content/uploads/2024/02/Deep-Karla.png",
    name: "Deep Kalra",
    year: "PGP 1992",
    prof: "Founder & Group CEO – MakeMyTrip, Chairman IIMAEF Board"
  },
  {
    image: "https://endowment.iima.ac.in/wp-content/uploads/2024/02/Deep-Karla.png",
    name: "Indra Nooyi",
    year: "PGP 1980",
    prof: "Former CEO – PepsiCo, Member of Amazon Board"
  },
  {
    image: "https://endowment.iima.ac.in/wp-content/uploads/2024/02/Deep-Karla.png",
    name: "Sundar Pichai",
    year: "BTech 1993",
    prof: "CEO – Google & Alphabet Inc."
  },
  {
    image: "https://endowment.iima.ac.in/wp-content/uploads/2024/02/Deep-Karla.png",
    name: "Arundhati Bhattacharya",
    year: "PGP 1977",
    prof: "Chairperson & CEO – Salesforce India, Former Chairperson – SBI"
  },
  {
    image: "https://endowment.iima.ac.in/wp-content/uploads/2024/02/Deep-Karla.png",
    name: "Raghuram Rajan",
    year: "PGP 1987",
    prof: "Former RBI Governor, Professor at University of Chicago"
  },
  {
    image: "https://endowment.iima.ac.in/wp-content/uploads/2024/02/Deep-Karla.png",
    name: "Kiran Mazumdar-Shaw",
    year: "PGP 1978",
    prof: "Executive Chairperson – Biocon Limited"
  }
];

function COEBenefactors() {
  return (
    <div className='captital-campus-content-sec mt-5'>
        <h1 className='text-center'>Our Benefactors</h1>
        <div className='coe-benfactor-d-grid mt-4'>
                {peopleData.map((item,index)=>(
                    <div key={index} title={item.name} className='d-flex align-items-center p-2 gap-4 coe-benfactor-grid-div shadow'>
                        <img src={item.image} className='col-5' alt={item.name}/>
                        <div className='col-6'>
                        <p className='fw-bold mb-1' style={{color:"#5ac501"}}>{item.name}</p>
                        <p className='mb-3' style={{fontSize:'14px'}}>{item.year}</p>
                        <p className='mb-0' style={{fontSize:'16px'}}>{item.prof}</p>
                        </div>
                    </div>
                ))}
        </div>
        <div className='d-flex flex-lg-row flex-column flex-md-row mt-5 gap-3 justify-content-center align-items-center'>
            <Button className='col-12 col-md-4 col-lg-3'style={{backgroundColor:"#5ac501",border:"none"}}>DONATE </Button>
            <Button className='col-12 col-md-4 col-lg-3'style={{backgroundColor:"#5ac501",border:"none"}}>View initiatives</Button>
        </div>
    </div>
  )
}

export default COEBenefactors