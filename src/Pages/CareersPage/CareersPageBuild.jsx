import React,{useRef, useState,useEffect} from 'react'
import useCountUp from '../../useCountUp'

const data = [
    { number: "700+", text: "Staff Members" },
    { number: "49%", text: "Gender Diversity (Women in Staff)" },
    { number: "70+", text: "Resident Faculty" },
    { number: "200+", text: "Long Service Staff" },
    { number: "25+", text: "Language Speakers" },
    { number: "90+", text: "Research Staff" },
];

function CountUpItem({ number, text, startCount }) {
  const pureNumber = parseInt(number);
  const count = startCount ? useCountUp(pureNumber, 2000) : 0;

  return (
    <div className='col-lg-4 col-6 cpb-data-div'>
      <h1 className="display-4 fw-bold">
        {count}
        {number.includes("+") && "+"}
        {number.includes("%") && "%"}
      </h1>
      <p>{text}</p>
    </div>
  );
}

function CareersPageBuild() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <div className="captital-campus-content-sec mt-5" ref={sectionRef}>
      <h1 className='display-5 fw-bold col-12'>
        Build a Career <span style={{ color: "#5ac501" }}>with UCU</span>
      </h1>

      <p className='pt'>
        UCU intends to work with people
      </p>

      <div className='d-grid cpb-data-grid rounded'>
        <div className='row row-gap-5'>
          {data.map((item, index) => (
            <CountUpItem
              key={index}
              number={item.number}
              text={item.text}
              startCount={startCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareersPageBuild;
