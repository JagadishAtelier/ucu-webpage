import { Clock, File } from 'lucide-react'
import React from 'react'
import { Button } from 'react-bootstrap'
import { BiRupee } from 'react-icons/bi'

const data = [
    {
        date: "18", month: "OCT",
        courseHead: "Acquiring Leadership Qualities Early in Life",
        time: "9:30 am - 11:00 am",
        fees: "200.00",
        pdf: "View PDF"
    },
    {
        date: "19", month: "OCT",
        courseHead: "Seven Habits of Successful Teens",
        time: "9:30 am - 11:00 am",
        fees: "200.00",
        pdf: "View PDF"
    },
    {
        date: "20", month: "OCT",
        courseHead: "Managing Mental Health",
        time: "9:30 am - 11:00 am",
        fees: "200.00",
        pdf: "View PDF"
    },
    {
        date: "21", month: "OCT",
        courseHead: "Kaizen: Cultivating Habits of Continual Improvement and Learning",
        time: "9:30 am - 11:00 am",
        fees: "200.00",
        pdf: "View PDF"
    },
    {
        date: "22 - 23", month: "OCT",
        courseHead: "Humans of Science – A STEAM Adventure for Curious Kids",
        time: "9:30 am - 11:00 am",
        fees: "200.00",
        pdf: "View PDF"
    },
    {
        date: "24 - 29", month: "OCT",
        courseHead: "How to Achieve a Winning Personality",
        time: "9:30 am - 11:00 am",
        fees: "200.00",
        pdf: "View PDF"
    },
    {
        date: "31", month: "OCT",
        courseHead: "5S – Organizing Self, Surrounding: Way to Excellence ",
        time: "9:30 am - 11:00 am",
        fees: "200.00",
        pdf: "View PDF"
    },
]

function EEPMdps() {
    return (
        <div className='captital-campus-content-sec mt-4'>
            <h1 className='display-5 fw-bold'>About <span style={{ color: "#5ac501" }}>  the Program</span></h1>
            <p className='pt'>UCU’s Management Development Programs (MDPs) are intensive, short-duration learning experiences crafted for working professionals who seek to stay ahead in a rapidly changing business environment. Spanning 1 to 5 days, these programs deliver focused insights into contemporary management practices, emerging industry trends, and practical tools that can be applied immediately in the workplace.</p>
            <p className='pt'>Designed with a balance of academic rigor and industry relevance, MDPs cover critical areas such as leadership effectiveness, operational excellence, financial decision-making, people management, and strategic innovation. Each program blends interactive sessions, case studies, and real-world applications to ensure participants gain actionable knowledge in a compact timeframe.</p>
            <p className='pt'>With expert faculty and seasoned industry practitioners leading the sessions, UCU’s MDPs provide professionals with the opportunity to sharpen their skills, refresh their perspectives, and strengthen their readiness for higher responsibilities. These programs are conducted in a professional format, with structured feedback mechanisms to continuously enhance learning outcomes.</p>
            <div className='my-4'>
                <Button className='cmp-mont-btn py-2'>October 2025</Button>
                <div>
                    {data.map((item, index) => (
                        <div className='d-flex flex-column flex-lg-row flex-md-row justify-content-between align-items-center cmp-data-hr-line'>
                            <div className='d-flex gap-3 align-items-center flex-column flex-lg-row flex-md-row'>
                                <div className='d-flex flex-row flex-md-column flex-lg-column items-center justify-center text-center'>
                                    <p className='m-0 cmp-date-text px-3 py-2'>{item.date}</p>
                                    <p className='m-0 cmp-month-text px-3 py-lg-1 py-md-1 py-2'>{item.month}</p>
                                </div>
                                <div className='d-flex flex-column gap-2 text-center text-lg-start text-md-start'>
                                    <p className='fs-5 fw-bold cmp-courseHead m-0'>{item.courseHead}</p>
                                    <div className='d-flex mx-auto m-lg-0 m-md-0 flex-wrap align-items-center justify-content-center align-items-lg-start justify-content-lg-start justify-content-md-start gap-3'>
                                        <div className='d-flex align-items-center gap-1 pe-3' style={{ borderRight: "1px solid gray" }}>
                                            <Clock size={18} style={{ color: "gray" }} />
                                            <p className='m-0' style={{ color: "gray" }}>{item.time}</p>
                                        </div>

                                        {/* <div className='d-flex align-items-center gap-1 pe-3' style={{borderRight:"1px solid gray"}}>
                            <File size={18} style={{color:"gray"}}/>
                        <p className='m-0' style={{color:"gray"}}>{item.pdf}</p>
                        </div> */}

                                        <div className='d-flex align-items-center gap-1 pe-3' style={{ borderRight: "1px solid gray" }}>
                                            <BiRupee size={18} style={{ color: "gray" }} />
                                            <p className='m-0' style={{ color: "gray" }}>{item.fees}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 flex-lg-row flex-md-column flex-column cmp-btns-div mt-4 mt-md-0 mt-lg-0' >
                                <Button className='px-lg-5 py-lg-2 mt-0 mt-md-0 mt-lg-0 text-black cmp-apply-btn fs-6 fw-light' style={{ backgroundColor: "white", border: "1px solid black" }}>Apply Now</Button>
                                <Button className='px-lg-2 py-lg-2 mt-0 mt-md-0 mt-lg-0 cmp-download-btn fs-6 fw-light' style={{ backgroundColor: "#5ac501", border: "none" }}>Download Broucher</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EEPMdps