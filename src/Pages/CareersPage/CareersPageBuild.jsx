import React, { useRef, useState, useEffect } from 'react'
import useCountUp from '../../useCountUp'

const defaultStats = [
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

function CareersPageBuild({ getKeyValue, getArray }) {
  const kv = (key, fallback) => (getKeyValue ? getKeyValue("CareersPageBuild", key, fallback) : fallback);
  const arr = (key, fallback) => (getArray ? getArray("CareersPageBuild", key, fallback) : fallback);

  const headingStart = kv("headingStart", "Build a Career");
  const headingSpan = kv("headingSpan", "with UCU");
  const description = kv("description", "UCU intends to work with people");
  const stats = arr("statsData", defaultStats);

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
        {headingStart} <span style={{ color: "#5ac501" }}>{headingSpan}</span>
      </h1>

      <p className='pt'>
        {description}
      </p>

      <div className='d-grid cpb-data-grid rounded'>
        <div className='row row-gap-5'>
          {stats.map((item, index) => (
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
