import React,{useState,useRef,useEffect} from 'react'
import './FaculityYears.css'
import CountUp from "react-countup";
import bgImage from '../../../Assets/aboutPageImage/image-ucu.svg'
const data = [
  { head:30000, suffix: "+", para: "Active students" },
  { head: 95, suffix: "%", para: "Employment Rate 6 Months after Graduation" },
  { head: 60, suffix: "+", para: "Expert Faculty Members" },
  { head: 25, suffix: "+", para: "International Partnership" },
];
function FaculityYears() {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
    return (
      <div ref={sectionRef} className='d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start py-4 px-3 p-lg-5 p-lg-7 bg-darkblue'
      style={{
        backgroundImage : `url(${bgImage})`,
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundRepeat : "no-repeat",
        minHeight : "20vh"
  
    }}
      >
  <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-start w-100">
    {data.map((item, index) => (
      <div 
        key={index} 
        className={`col-12 col-lg-3 d-flex flex-column gap-lg-4 gap-3 flex-lg-column text-gap-between align-items-center align-items-lg-start px-0 px-lg-3 position-relative ${
          index < data.length - 1 ? "with-divider" : ""
        }`}
      >
  <h1 className="fw-bold text-size">
    {inView ? (
      <CountUp
        start={0}
        end={item.head}
        duration={2.5}
        separator=","
        suffix={item.suffix}
      />
    ) : (
      0
    )}
  </h1>
  
        <p className="fs-6 mb-0">{item.para}</p>
      </div>
    ))}
  </div>
  
  
  
        
      </div>
  )
}

export default FaculityYears
