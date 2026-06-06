import React, { useEffect, useState } from "react";
import { getContactPageData } from "../../Api/ContactPageApi";

const fallbackCities = [
  { title: "North", poc: { name: "Rising Leaders North", contact: "+91 9876543210", email: "northchapter@ucu.edu" }, img: "https://img.freepik.com/free-photo/typographic-optical-illusions-delhi_23-2150921914.jpg" },
  { title: "South", poc: { name: "Rising Leaders South", contact: "+91 9876543210", email: "southchapter@ucu.edu" }, img: "https://img.freepik.com/free-photo/temple-atop-clouds-sunrise_23-2152002049.jpg" },
  { title: "East", poc: { name: "Rising Leaders East", contact: "+91 9876543210", email: "eastchapter@ucu.edu" }, img: "https://img.freepik.com/premium-photo/victoria-memorial-is-monument-museum-located-kolkata-west-bengal-india_459244-68.jpg" },
  { title: "West", poc: { name: "Rising Leaders West", contact: "+91 9876543210", email: "westchapter@ucu.edu" }, img: "https://img.freepik.com/free-photo/high-angle-shot-bandra-worli-sealink-mumbai-enveloped-with-fog_181624-9734.jpg" },
  { title: "Central", poc: { name: "Rising Leaders Central", contact: "+91 9876543210", email: "centralchapter@ucu.edu" }, img: "https://img.freepik.com/free-photo/mehrangarh-fort_1357-12.jpg" },
];

function ContactChapterGrid() {
  const [cities, setCities] = useState(fallbackCities);

  useEffect(() => {
    let mounted = true;

    getContactPageData().then((data) => {
      const center = (data?.indiaCenter || []).find((section) => section.isVisible !== false);
      if (!mounted || !center?.states?.length) return;

      setCities(center.states.map((state) => ({
        title: state.name,
        img: state.image,
        poc: state.poc || {},
      })));
    });

    return () => {
      mounted = false;
    };
  }, []);

  const sortedCities = [...cities].sort((a, b) =>
    a.title.localeCompare(b.title, "en", { sensitivity: "base" })
  );

  return (
    <div className="container my-5">
      <div className="row">
        {sortedCities.map((item, index) => (
          <div className="col-lg-4 col-md-6 mb-4 mx-auto" key={`${item.title}-${index}`}>
            <div className="flip-card">
              <div className="flip-card-inner shadow">
                <div className="flip-card-front">
                  <img src={item.img} alt={item.title} className="img-fluid" />
                  <div className="chapter-overlay"></div>
                  <div className="card-text">{item.title}</div>
                </div>

                <div className="flip-card-back">
                  <h5>{item.poc?.name || item.title}</h5>
                  {item.poc?.contact && <p>Contact: {item.poc.contact}</p>}
                  {item.poc?.email && <p>Email: {item.poc.email}</p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactChapterGrid;
