import React from 'react'
import './Footer.css'
import image from '../../Assets/homeImage/footer-logo.png'
import bgImage from '../../Assets/homeImage/Union (3).svg'
function Footer() {
  return (
    <div className='footer-container'>
        <img src={bgImage} className='bgImage'/>
        <div className='footer-first-row'>
            <img src={image}/>
            <div className='icon-text-div'>
                <div className='icon-text'>
                    <i class="bi bi-geo-alt"></i>
                    <p>1810 Campus Way NE Arizon</p>

                </div>
                <div className='icon-text'>
                    <i class="bi bi-telephone"></i>
                    <p>+09876 43210</p>
                </div>
            </div>
            <div className='social-text'>
                <p>Social Media</p>
                <div className='icon-social'>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-youtube"></i>
                </div>
            </div>
            <div className='input-text'>
                <p>Subscribe Our Newsletter</p>
                <input type='text' placeholder='Enter your mail'/>
            </div>
        </div>
        <hr/>
        <div className='footer-second-row'>
        <div className='row-two-para'>
            <p>We are passionate education dedicated to providing high-quality resources learners all backgrounds.</p>

        </div>
        <div className='pages-links'>
            <h4>About UCU</h4>
            <a href='/'> About Us</a>
            <a href='/'>Advisory Council</a>
            <a href='/'>Faculty</a>
            <a href='/'>Committees & Clubs</a>
        </div>
        <div className='pages-links'>
            <h4>Admissions</h4>
            <a href='/'> Admission Process</a>
            <a href='/'>Scholarships</a>
            <a href='/'>Apply Now</a>
        </div>
        <div className='pages-links'>
            <h4>Insights</h4>
            <a href='/'>News & Blogs</a>
            <a href='/'>Events</a>
        </div>
        </div>
        <hr className='hr-line-footer'/>
        <div className='copy-right-text'>
            <p>Copyright @ 2025.All Rights . Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer
