import React from 'react'
import { Button } from 'react-bootstrap'
import image3 from "../../Assets/acp/image3.jpg";
import aacImage3 from "../../Assets/linkedin profilea/Dr. Vaidy Jayaraman.jpg";
import pI from "../../Assets/acp/profileImg.webp";
import { ChevronRight } from 'lucide-react';
const data = [
  {
    image: image3,
    head: "Ganesan Ramachandran",
    para: "MD, Accenture Strategy"
  },
  {
    image: aacImage3,
    head: "Dr. Vaidy Jayaraman",
    para: "Distinguished Professor in Operations, Miami Institute of Management"
  },
  {
    image: "/consort.jpeg",
    head: "Ganapathy Subramaniam",
    para: "Chief Human Resource Officer"
  },
  {
    image: '/kunal.jpg',
    head: "Kunal Choudhury",
  }
]


function ConsortiumLeader() {
  return (
    <div className='captital-campus-content-sec text-white py-5 consortium-leader-container' style={{ backgroundColor: "#0c0142" }}>
      <h1 className='fw-bold text-center display-5 col-10 mx-auto text-uppercase'>
        Our Leadership Team
      </h1>
      <p className='text-center col-9 mx-auto mb-5'>At the Consortium, “Representation” and “Inclusion” are not just buzzwords; they are the credo we live by and the thoughtful actions that define us. Meet the inspiring people who live and breathe our mission.</p>
      <div className='d-grid'>
        <div className='row row-gap-2'>
          {data.map((item, index) => (
            <div key={index} className='col-lg-3 col-md-6 d-flex'>
              <div className='card bg-transparent text-left text-white border-0 w-100 d-flex flex-column align-items-start'>
                  <img src={item.image} alt={item.head} className='img-fluid rounded mb-3 consortium-leader-image' />
                  <div className='consotium-text-box'>
                    <h4 className='text-uppercase fw-bold text-center'>{item.head}</h4>
                    <p className='consoritum-para-text text-center'>{item.para}</p>
                  </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='text-center pb-2 mt-5'>
        <Button variant='light' className='text-black fw-semibold px-4 m-0'>
          MEET OUR FULL TEAM
        </Button>
      </div>
    </div>
  )
}

export default ConsortiumLeader