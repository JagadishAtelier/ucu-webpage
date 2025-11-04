import React from 'react'

function ConsortiumDesc() {
    return (
        <div className='captital-campus-content-sec mt-4 d-flex flex-column gap-2 align-items-center text-center'>
            <div className=''>
                <p className='col-12 display-4 fw-bold m-0' style={{ color: "#5ac501" }}>Consortium</p>
                <div className='d-flex align-items-center text-end justify-content-end gap-2'>
                    <p className='m-0'>An initiative by</p>
                    <img src='/logo2.svg' className='consortium-page-logo' />
                </div>
            </div>
            <p className='col-12 fs-5 '>The UCU Consortium is an integrated platform that brings together academic institutions, graduate and post-graduate students and visionary corporate partners into a unified ecosystem of shared advancement. For institutions, it delivers the Academic Accelerator to strengthen pedagogy, research, and industry relevance; for corporates, it provides privileged access to untapped, high-potential talent; and for students, it creates pathways to career opportunities, professional networks, alumni engagement, and direct interaction with industry leaders. Collectively, the Consortium fosters a virtuous cycle of collaboration, innovation, and impact—seamlessly connecting education, enterprise, and employability.</p>

        </div>
    )
}

export default ConsortiumDesc