import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { Calendar1Icon, ChevronRight, Mail } from 'lucide-react'
import { BsFacebook, BsInstagram, BsLinkedin, BsMailbox, BsMailbox2, BsTwitterX } from 'react-icons/bs'

const data = `
    <p>
        UCU announced today that its Bachelor of Data Science (BDS) program has achieved 100% placements for the Class of 2024 (eligible graduates). This marks the third consecutive year of this achievement. The batch’s highest salary reached AUD 105,000 (plus benefits), with an average cash salary of AUD 84,750.
    </p>

    <p>
        Companies that hired SP Jain Global’s BDS graduates include organisations such as Greenstone Financials, Telstra Corporation Limited, Ingrity Pty Ltd, TAL Australia, Eucalyptus Australia, Bupa Australia Pty Ltd, Epicentre Engineers Pty Ltd, and Morgan Stanley Capital International et al. Graduates have secured positions in diverse sectors, including IT Services & Consulting (46%), Financial Services (23%), Telecommunications (8%), and Healthcare (8%). The program’s rigorous curriculum and hands-on learning approach have equipped students to excel in roles such as data analysts, data scientists, IT consultants, and business intelligence specialists.
    </p>

    <p>
        In addition to full-time roles, students received prestigious internship offers at global organizations such as NP Investment Research (USA), Adaptive Investments (USA), Grameen Foundation, Frost & Sullivan Australia Pty. Ltd., Endeavour Group (Australia), St Trinity Property Group (Australia), University of Wroclaw (Poland), CSIRO (Australia), CyberArc Inc., and National Taiwan Normal University (Taiwan). Students have also showcased their talent by winning hackathons in both India and Australia, presenting research at IEEE and Google conferences, and publishing award-winning research papers.
    </p>

    <img src="https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg" class="mb-4  mt-4 mx-auto med-image"/>

    <p>
        “We are thrilled to celebrate another year of 100% placements for our BDS graduates,” said Abhijit Dasgupta, Director of the BDS program at SP Jain Global. “The fact that our students have earned salaries 40% higher than the average graduate compensation in Australia reflects not only their exceptional technical expertise and problem-solving capabilities but also the rigorous training and industry-relevant exposure they receive during the program. It is a proud moment for us to see their talents being recognised and rewarded on a global stage. This achievement underscores the strength of our academic curriculum, global exposure, and deep industry partnerships. It also reflects the trust top recruiters place in our graduates to excel in a data-driven world.”
    </p>


    <p>
        Highlighting the program’s transformative impact, Shubh Mehta, a 2024 graduate, shared, “The program’s immersive curriculum and personalised mentorship boosted my confidence and equipped me with practical insights that were instrumental in achieving multiple milestones. During my time at SP Jain Global, I secured several prestigious internships, published award-winning research papers, and even earned a patent to my name. This robust foundation and extensive support of the placement team in providing multiple job opportunities secured me a full-time position at Greenstone Financials after graduation. I owe my success to the program's holistic approach to education and career development.” In addition to securing a role at Greenstone Financials, Shubh also earned a coveted spot in the MS Computer Science program at Harvard University.
    </p>

    <p>
        The BDS program at SP Jain Global is a rigorous three-year course designed for high school graduates passionate about mathematics and science. Offered in Mumbai and Sydney, the program blends theoretical knowledge with practical experience in data science, programming, analytics, and machine learning. Graduates are also eligible to apply for a post-study work visa in Australia, enabling them to gain valuable international work experience.*
    </p>
`
function MediaEventDetails() {
    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-center p-3 p-lg-5 p-lg-7"
                style={{
                    backgroundImage: `url(https://execed.isb.edu/content/dam/sites/cee/images/Group%201182.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "40vh",
                }}
            >
                <div
                    className="w-100 w-lg-75 w-lg-50 ms-lg-5"
                    data-aos="fade-right"
                >
                    {/* Dynamic Title */}
                    <h1 className="fw-bold fs-1 fs-lg-1 col-10 mx-auto">Economic Times interview: Dr Gary Stockport on why mid-career professionals choose EMBAs</h1>
                </div>

                <div className='position-absolute bottom-0 left-0 d-flex align-items-center justify-content-between campus-route-bg med-route-bg py-2'>
                    <div className='d-flex align-items-center gap-2 '>
                        <Calendar1Icon />
                        <p className='m-0'>October 18, 2025</p>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <BsTwitterX />
                        <BsLinkedin />
                        <BsFacebook />
                        <Mail />
                    </div>
                </div>
            </div>

            <div className='captital-campus-content-sec my-4'>
                <div dangerouslySetInnerHTML={{ __html: data }} />
            </div>

            <NewFooter />
        </div>
    )
}

export default MediaEventDetails