import { Clock, File } from 'lucide-react'
import React from 'react'
import { Button } from 'react-bootstrap'
import { BiRupee } from 'react-icons/bi'
const data = [
    { date : "01",month : "NOV",
        courseHead : "Discovering Your Career Path",
        time : "9:30 am - 11:00 am",
        fees : "200.00",
        pdf : "View PDF"
    },
    
]
export default function NextMonthPrograms() {
  return (
    <div className='captital-campus-content-sec my-5'>
        <Button className='cmp-mont-btn py-2'>November 2025</Button>
    <div>
        {data.map((item,index)=>(
            <div className='d-flex flex-column flex-lg-row flex-md-row justify-content-between align-items-center cmp-data-hr-line'>
                <div className='d-flex gap-3 align-items-center flex-column flex-lg-row flex-md-row'>
                <div className='d-flex flex-row flex-md-column flex-lg-column items-center justify-center text-center'>
                    <p className='m-0 cmp-date-text px-3 py-2'>{item.date}</p>
                    <p className='m-0 cmp-month-text px-3 py-lg-1 py-md-1 py-2'>{item.month}</p>
                </div>
                <div className='d-flex flex-column gap-2 text-center text-lg-start text-md-start'>
                    <p className='fs-5 fw-bold cmp-courseHead m-0'>{item.courseHead}</p>
                    <div className='d-flex mx-auto m-lg-0 m-md-0 flex-wrap align-items-center justify-content-center align-items-lg-start justify-content-lg-start justify-content-md-start gap-3'>
                        <div className='d-flex align-items-center gap-1 pe-3' style={{borderRight:"1px solid gray"}}>
                        <Clock size={18} style={{color:"gray"}}/>
                        <p  className='m-0' style={{color:"gray"}}>{item.time}</p>
                        </div>

                        <div className='d-flex align-items-center gap-1 pe-3' style={{borderRight:"1px solid gray"}}>
                            <File size={18} style={{color:"gray"}}/>
                        <p className='m-0' style={{color:"gray"}}>{item.pdf}</p>
                        </div>

                        <div className='d-flex align-items-center gap-1 pe-3' style={{borderRight:"1px solid gray"}}>
                        <BiRupee size={18} style={{color:"gray"}}/>
                        <p className='m-0' style={{color:"gray"}}>{item.fees}</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className='d-flex flex-lg-row flex-md-column flex-row gap-3'>
                    <Button className='px-lg-5 py-lg-2 mt-lg-4 mt-md-0 mt-lg-0 text-black cmp-apply-btn fs-6 fw-light' style={{backgroundColor:"white",border:"1px solid black"}}>Apply Now</Button>
                    <Button className='px-lg-2 py-lg-2 mt-lg-4 mt-md-0 mt-lg-0 cmp-download-btn fs-6 fw-light' style={{backgroundColor:"#5ac501",border:"none"}}>Download Broucher</Button>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}
