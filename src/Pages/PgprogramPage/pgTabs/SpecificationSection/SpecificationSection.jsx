import React from 'react'
import './Specification.css'
function SpecificationSection() {
    return (
        <div>
            <h1 className='display-4 fw-bold'><span style={{ color: "#5ac501" }}>Dual specialisation:</span> Developing Functional and Industry Expertise</h1>
            <p>The PGPM program offers specialisations allowing students to gain deep expertise in two disciplines. In addition to Finance, Marketing, and Operations, you can pursue dual majors in Analytics, Data Science, Consulting and Strategy, gaining expertise tailored to today’s complex business environment. These specialisations, designed in consultation with industry leaders, emphasize problem-solving and in-depth industry competencies.</p>
            <div className='d-flex justify-content-between gap-4'>
                <div className='col-6'>
                    <h3>Industry Specialisations</h3>
                    <p className='SS-list-heading'>Product Management</p>
                    <div className="d-flex gap-2 align-items-center mb-3">
                        <div className="green-point-box"></div>
                        <p className="m-0 ">Strategic Product Development and Execution Part 1</p>
                    </div>
                </div>
                <div className='6'>
                    <h3>Industry Specialisations</h3>
                    <p>Product Management</p>
                    <div className="d-flex gap-2 align-items-center mb-3">
                        <div className="green-point-box"></div>
                        <p className="m-0 ">Strategic Product Development and Execution Part 1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecificationSection