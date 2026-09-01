import { MailCheck } from 'lucide-react'
import React from 'react'
import "swiper/css";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const defaultPrograms = [
    {
        image: "https://images.isb.edu/is/image/isbprod/individuals-ALP-thumb?fmt=webp&qlt=100,0&resMode=sharp2&op_usm=1.75,0.3,2,0&version=1763965652086&version=1763965652080",
        head: "Advanced Leadership Programmes",
        para: "Specialised programmes designed to elevate the domain mastery of CXOs and accelerate their leadership pathways."
    },
    {
        image: "http://s7ap1.scene7.com/is/image/isbprod/Individual%20Page_CLP%20card?fmt=webp&qlt=100,0&resMode=sharp2&op_usm=1.75,0.3,2,0&version=1763965652104&version=1763965652098",
        head: "Advanced Leadership Programmes",
        para: "Specialised programmes designed to elevate the domain mastery of CXOs and accelerate their leadership pathways."
    },
    {
        image: "http://s7ap1.scene7.com/is/image/isbprod/Individual%20page_TFP%20card.png?fmt=webp&qlt=100,0&resMode=sharp2&op_usm=1.75,0.3,2,0&version=1763965652093&version=1763965652087",
        head: "Advanced Leadership Programmes",
        para: "Specialised programmes designed to elevate the domain mastery of CXOs and accelerate their leadership pathways."
    },
];

function ProgramsForIndividualsData({ getKeyValue, getArray }) {
    const navigate = useNavigate();

    const kv = (key, fallback) => (getKeyValue ? getKeyValue("ProgramsForIndividualsData", key, fallback) : fallback);
    const arr = (key, fallback) => (getArray ? getArray("ProgramsForIndividualsData", key, fallback) : fallback);

    const introTitle = kv("introTitle", "Choose from a diverse range of programmes that strengthen your management and leadership acumen and map your career to future success.");
    const desc1 = kv("desc1", "Whatever your distinctive learning goal, be it improving your Leadership and Management skills or preparing for a new role or learning about industry innovations, ISB Executive Education has a learning solution for you.");
    const desc2 = kv("desc2", "Explore our swathe of offerings from long-duration advanced and comprehensive leadership development programmes to shorter-term, topic-focused learning experiences. Our world-class learning journeys offer research-backed curricula and diverse industry perspectives delivered through a wide range of pedagogies, opportunities for collaborative learning with a diverse and vibrant group of peers, and practical solutions for your pressing business challenges.");
    const desc3 = kv("desc3", "Experience accelerated personal and professional growth to create a significant impact in your world.");

    const programs = arr("programsDataList", defaultPrograms);
    const buttonText = kv("buttonText", "Know more");

    const registerTitle = kv("registerTitle", "Register Your Interest");
    const registerDesc = kv("registerDesc", "For programme queries or registrations, please use the main Contact Us page.");
    const registerBtnText = kv("registerBtnText", "Contact Us");

    return (
        <div className='captital-campus-content-sec my-4'>
            <div className='d-flex flex-lg-row flex-column gap-5'>
                <div className='col-lg-12 '>
                    <h3 className='mb-3'>{introTitle}</h3>
                    <p className="text-justifys">{desc1}</p>
                    <p className="text-justifys">{desc2}</p>
                    <p className="text-justifys">{desc3}</p>
                    <div className='PFI-grid'>
                        {programs.map((item, index) => (
                            <div key={index} className='d-flex flex-column gap-3 justify-content-between p-0 rounded' style={{ border: "1px solid #cdcdcd" }}>
                                <img src={item.image} className='rounded PFI-page-grid-image' alt={item.head} style={{objectFit: "cover", height: "180px", width: "100%"}} />
                                <div className='p-3'>
                                    <h4>{item.head}</h4>
                                    <p>{item.para}</p>
                                    <Button className='mt-auto w-100' onClick={() => navigate("/contact-us")}>{buttonText}</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <h1>{registerTitle}</h1>
                <p className='mt-3'>{registerDesc}</p>
                <div onClick={() => navigate("/contact-us")} className='d-flex gap-3 align-items-center mt-3 col-lg-2 col-md-4 col-10 text-white justify-content-center py-2 rounded mx-auto' style={{ backgroundColor: "#5ac501", cursor: "pointer" }}>
                    <MailCheck />
                    <p className='mb-0'>{registerBtnText}</p>
                </div>
            </div>
        </div>
    )
}

export default ProgramsForIndividualsData
