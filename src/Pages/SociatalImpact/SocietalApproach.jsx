import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
function SocietalApproach() {
  return (
    <div className='captital-campus-content-sec my-4'>
        <h1>Approach to societal impact:</h1>
        <div className='d-flex gap-3 flex-lg-row flex-md-row flex-column my-4'>
          <p className='col-lg-9 col-md-7 fw-normal fs-6'>
            Explore SPJIMR’s approach to creating a positive and sustainable societal impact with our Dean, Varun Nagaraj. In this video, he highlights the various ways SPJIMR makes a difference, including engaging with large-scale communities such as non-profits, the development sector, FinTech and finance professionals, and entrepreneurs to improve practices and build capacity. Additionally, SPJIMR focuses on creating socially conscious leaders, focusing on research that is relevant to society, and extending its impact internationally by chairing the UN PRME India Chapter and welcoming international universities and students to participate in our immersive social programmes.</p>

          <div className='societal-video-1'>
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Sonam Wangchuk Keynote"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>


        <div className='d-flex gap-3 flex-lg-row flex-md-row flex-column'>
          <p className='col-lg-9 col-md-7 fw-normal fs-6'>
            During her visit to Mumbai, Dr. Stephanie Bryant, the Executive Vice President and Global Chief Accreditation Officer of AACSB, noted that SPJIMR’s approach to societal impact goes beyond mere good actions and is intricately linked to the institute’s strategic vision. She emphasised that this alignment resonates deeply with AACSB’s vision to connect business schools, industry, non-profits and government to drive positive societal change in the world. Watch the video to know more.
          </p>
          <div className='societal-video-1'>
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Sonam Wangchuk Keynote"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
    </div>
  )
}

export default SocietalApproach