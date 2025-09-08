import React,{useEffect,useState} from 'react'
import './FaculityFaq.css'
import image from "../../../Assets/ucu (1)/Rectangle 154.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const data = [
    {
      head: "What are the admission requirements for undergraduate programs?",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    },
    {
      head: "When do applicants for the fall semester open?",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    },
    {
      head: "Can I apply to more than one faculty?",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    },
    {
      head: "is there an application fee, and how do I pay it?",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    },
    {
      head: "Are international students eligible to apply?",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    },
  ];
function FaculityFaq() {
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }, []);
  
    const toggleText = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className="platforms-container py-lg-5 mt-lg-0 fac-plat-con">

      <div className="platform">
        <img src="https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-L33ZCYU.jpg" 
        alt="Platform illustration" className='fac-faq-banner'/>
        <div className="platform-data-div">
        <div className='d-flex flex-row flex-lg-row gap-2 gap-lg-2'>
        <div className='vertical-line'></div>
        <p className='fs-lg-4 text-uppercase'>FAQ</p>
        </div>
        <h1 className='display-4 fw-bold col-10'>Everything You Need to <span style={{ color: "#5ac501" }}>Know</span> Here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur ex quis lorem elementum varius. Nam vestibulum, ex sit amet dapibus eleifend, lectus justo finibus erat, eget commodo lorem diam vitae nulla.</p>
          {data.map((item, index) => (
            <div
              key={index}
              className="platform-indiviual-con"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div
                className="platform-item-div"
                onClick={() => toggleText(index)}
                style={{ cursor: "pointer" }}
              >
                <h1>{item.head}</h1>
                <i
                  className={`bi bi-chevron-down chevron-icon ${
                    openIndex === index ? "rotate" : ""
                  }`}
                ></i>
              </div>

              {openIndex === index && (
                <div data-aos="fade-left">
                  <p className="platform-text">{item.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaculityFaq
