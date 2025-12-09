import React from "react";

function WhyPgpmSection() {
    return (
        <section className="mt-4">
            <div className="custom-container-inner">
                <h2 className="fw-bold"><span style={{color:"#5ac501"}}>Why is PGPM-Elite</span> the most innovative and industry focused curriculum?</h2>

                <div className="col-md-12">
                    <div className="row row-new-block row-gap-4">

                        {/* TEXT BLOCK */}
                        <div className="col-lg-6 pull-left mobile-f">
                            <p>
                                The extensive research, discussions and feedback from CXOs, senior alumni
                                and corporate recruiters across various sectors and cities revealed a demand
                                for professionals who are good at:
                            </p>

                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <div className="green-point-box p-2"></div>
                                <p className="mb-0">Demonstrating structured problem-solving and strong decision-making skills grounded in data-driven insights.</p>
                            </div>
                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <div className="green-point-box p-2"></div>
                                <p className="mb-0">Utilizing and implementing disruptive tools like Generative AI andstaying ahead of Industry 4.0 trends.</p>
                            </div>
                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <div className="green-point-box p-2"></div>
                                <p className="mb-0">Being able to articulate ideas, problems, and solutions effectively,and leverage storytelling.</p>
                            </div>
                            <div className='d-flex gap-2 align-items-baseline mb-2'>
                                <div className="green-point-box p-2"></div>
                                <p className="mb-0">Integrating environmental and social considerations into strategicbusiness decisions.</p>
                            </div>
                        </div>
                        {/* IMAGE BLOCK */}
                        <div className="col-lg-6 why-curricullam-image-div">
                            <img
                                alt="focused curriculum"
                                loading="lazy"
                                src="https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/why-is-pgpm-2-0-the-most-innovative-and-industry-focused-curriculum.webp"
                                title="focused curriculum"
                                className="why-curricullam-image"
                            />
                            {/* <div className="academic-text">Ganesh Ramachandran, MD - Accenture</div> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WhyPgpmSection;
