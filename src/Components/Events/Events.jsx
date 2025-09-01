import React,{useState} from 'react'
import './Events.css'
import image from '../../Assets/ucu (1)/Rectangle 100.jpg'
const data = [
    {
        date : "15 Sept",
        head : "Masterclass: Navigating the Global Corporate Landscape",
        text : "Led by global CXOs, this session will cover leadership agility and market expansion strategies.",
    },
    {
        date : "05 Oct",
        head : "Workshop: AI Applications in Business Strategy",
        text : "Interactive workshop on leveraging AI for data-driven decisions and innovation.",
    },
    {
        date : "20 Oct",
        head : "Panel: Career Opportunities in Emerging Sectors",
        text : "Experts from GCC, FinTech, and Mobility industries share hiring trends and skills in demand.",
    },
    {
        date : "08 Nov",
        head : "Webinar: Building Future-Ready Leaders",
        text : "Interactive session with corporate mentors on leadership development.",
    }
]

function Events() {
    const [openIndex, setOpenIndex] = useState(0)
    const [active, setActive] = useState("Latest") // default active button

    const buttons = ["Latest", "Exam", "Admission"]

    const toggleText = (index) => {
      setOpenIndex(openIndex === index ? null : index) // toggle
    }
  return (
    <div className='eve-platforms-container'>
        <div className='event-header'>
            <h1>Recent Events</h1>
            <div className='event-header-left'>
                <h1>Upcoming Events</h1>
                <a href='/'>View all</a>
            </div>
        </div>
      <div className='eve-platform'>
      <div className="eve-image-container">
    <img src={image} alt="Event" />
    <div className="eve-overlay"></div>
    <div className="eve-overlay-text">
      <h3>Industry Icons Leadership Summit 2025</h3>
      <p>UCU hosted top business leaders from the BAC, AAC, and CHRO councils to discuss future skills and industry trends.</p>
    </div>
  </div>
        <div className='eve-platform-data-div'>
            <div className='events-btns-div'>
            {buttons.map((btn, index) => (
        <button
          key={index}
          className={active === btn ? "active-btn" : ""}
          onClick={() => setActive(btn)}
        >
          {btn}
        </button>
      ))}
            </div>
            {data.map((item,index)=>(
                <div key={index} className='eve-platform-indiviual-con'>
                    <div className='eve-platform-item-div'
                                    onClick={() => toggleText(index)}
                                    style={{cursor:"pointer"}}
                    >
                        <div className='event-data-and-text'>
                        <h1 className='date-text'>{item.date}</h1>
                        <h1>{item.head}</h1>
                        </div>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                    {openIndex === index && (
                        <div>
                <p className='eve-platform-text'>{item.text}</p>
                <div className = 'car-explore-btn-div platform-btn'>
                    <button className='car-explore-btn'>EXPLORE PGDM</button>
                    <button className='car-apply-btn'>APPLY NOW</button>
                </div>
                </div>
                
              )}
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Events
