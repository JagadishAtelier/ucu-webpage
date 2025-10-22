import React from 'react'

function AboutSummer() {
  return (
    <div className='captital-campus-content-sec my-4'>
        <h1 className='display-4 col-12 fw-bold'>About <span style={{color:"#5ac501"}}> Summer School Program</span></h1>
        <div className='d-flex flex-lg-row flex-column gap-2'>
            <div>
                <p>Taking forward our mission of creating future leaders, Bennett University is excited to introduce the inaugural edition of the Bennett University Summer School - a holistic, collaborative, and industry-focused initiative. The Summer School promises to be a unique opportunity to enhance the educational experience of students.</p>
                <p>Bennett University’s Summer School for Future Leaders presents a diverse array of courses meticulously crafted to broaden students' knowledge and skills, providing a unique platform for academic growth and personal development. Encompassing courses in Science & Technology, Economics, Finance & Business, Law, Literature, Media & Design, the program aims to provide a taste of interdisciplinary education before students embark on their higher education journey.</p>
                <p className='fw-bold'>Program dates:</p>
                <p className='fw-bold'>10th June - 22nd June 2024</p>
            </div>
            <img src='https://img.freepik.com/premium-photo/students-studying-library-with-books-papers_1028860-115896.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80' className='summer-program-about-image'/>
        </div>
    </div>
  )
}

export default AboutSummer