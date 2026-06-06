import React, { useEffect, useState } from "react";
import { getContactPageData } from "../../Api/ContactPageApi";

const fallbackCities = [
  { title: "USA", poc: { name: "USA UCU Chapter", contact: "+1 987 654 3210", email: "usachapter@ucu.edu" }, img: "https://img.freepik.com/free-photo/new-york-city_649448-1230.jpg?w=740" },
  { title: "Canada", poc: { name: "Canada UCU Chapter", contact: "+1 555 234 7890", email: "canadachapter@ucu.edu" }, img: "https://img.freepik.com/free-photo/ottawa-parliament-hill-building_649448-3630.jpg?w=740" },
  { title: "UK", poc: { name: "UK UCU Chapter", contact: "+44 1234 567890", email: "ukchapter@ucu.edu" }, img: "https://img.freepik.com/free-photo/big-ben-houses-parliament-london-uk_268835-1400.jpg?w=740" },
  { title: "Singapore", poc: { name: "Singapore UCU Chapter", contact: "+65 987 222 444", email: "singaporechapter@ucu.edu" }, img: "https://img.freepik.com/free-photo/marina-bay-sands-night-singapore_181624-1683.jpg?w=740" },
  { title: "Australia", poc: { name: "Australia UCU Chapter", contact: "+61 123 987 555", email: "australiachapter@ucu.edu" }, img: "https://img.freepik.com/free-photo/sydney-opera-house-sydney-australia_181624-38241.jpg?w=740" },
];

function ContactChapterInternatinalGrid() {
  const [cities, setCities] = useState(fallbackCities);

  useEffect(() => {
    let mounted = true;

    getContactPageData().then((data) => {
      const centers = data?.internationalCenter || data?.iternationalCenter || [];
      const center = centers.find((section) => section.isVisible !== false);
      if (!mounted || !center?.countries?.length) return;

      setCities(center.countries.map((country) => ({
        title: country.name,
        img: country.image,
        poc: country.poc || {},
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

export default ContactChapterInternatinalGrid;
