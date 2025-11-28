import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const data = [
  {
    image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600",
    head: "Our Students",
    para: "Our students are driven leaders who actively foster inclusion in their schools, workplaces and communities."
  },
  {
    image: "https://images.pexels.com/photos/34570464/pexels-photo-34570464/free-photo-of-smiling-teacher-engaging-with-students-indoors.jpeg?auto=compress&cs=tinysrgb&w=600",
    head: "Member Schools",
    para: "The nation’s top MBA programs are proud members of The Consortium, united in a shared mission to expand access and opportunity."
  },
  {
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    head: "Corporate Partners",
    para: "Industry-leading companies partner with The Consortium to connect with exceptional MBA talent and advance inclusive leadership."
  },
  {
    image: "https://images.pexels.com/photos/7944130/pexels-photo-7944130.jpeg?auto=compress&cs=tinysrgb&w=600",
    head: "Our Alumni",
    para: "Our alumni are trailblazers across the country, offering guidance, mentorship and inspiration to the next generation of leaders."
  }
]

function ConsotiumPillars() {
  const navigate = useNavigate()
  return (
    <div className='captital-campus-content-sec mt-4 text-white py-lg-5 py-3 consortium-pillars-container' style={{ backgroundColor: "#0c0142" }}>
      <h1 className='fw-bold text-center display-5 col-10 mx-auto text-uppercase mb-lg-5 mb-2'>
        Our network is built on these four foundational pillars :
      </h1>

      <div className='d-grid px-3'>
        <div className='row row-gap-3'>
          {data.map((item, index) => (
            <div key={index} className='col-lg-3 col-md-6 col-12 d-flex'>
              <div className='card bg-transparent text-left text-white border-0 w-100 d-flex flex-column justify-content-between align-items-start'>

                <div>
                  <img src={item.image} alt={item.head} className='img-fluid rounded mb-3 consortium-pillar-image' />
                  <h3 className='text-uppercase fw-bold text-start'>{item.head}</h3>
                  <div className='consoritum-pillar-line me-auto my-2' style={{ width: '50px', height: '3px', background: 'white' }}></div>
                  <p className='consoritum-para-text text-start'>{item.para}</p>
                </div>

                <div className='mt-auto text-center pb-2'>
                  <Button onClick={()=>navigate('/offerings')} variant='light' className='text-black fw-semibold px-4'>
                    Offerings
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConsotiumPillars
