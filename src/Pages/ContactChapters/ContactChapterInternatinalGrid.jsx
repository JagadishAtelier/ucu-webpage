import React from 'react';

const cities = [
    // USA
    {
        title: "USA",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/new-york-city_649448-1230.jpg?w=740"
    },

    // Canada
    {
        title: "Canada",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/ottawa-parliament-hill-building_649448-3630.jpg?w=740"
    },

    // UK
    {
        title: "UK",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/big-ben-houses-parliament-london-uk_268835-1400.jpg?w=740"
    },

    // Germany
    {
        title: "Germany",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/vertical-view-roemerberg-frankfurt-germany_1268-20916.jpg?w=740"
    },

    // France
    {
        title: "France",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/pantheon-surrounded-by-people-cloudy-sky-sunset-paris-france_181624-8826.jpg?w=740"
    },

    // Netherlands
    {
        title: "Netherlands",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/beautiful-shot-pond-near-binnenhof-netherlands_181624-34798.jpg?w=740"
    },

    // Italy
    {
        title: "Italy",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/colosseum-rome-italy_268835-3919.jpg?w=740"
    },

    // Denmark
    {
        title: "Denmark",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/copenhagen-city-denmark_1268-14457.jpg?w=740"
    },

    // Finland
    {
        title: "Finland",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/helsinki-cathedral-finland_181624-33346.jpg?w=740"
    },

    // Spain
    {
        title: "Spain",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/sagrada-familia-barcelona-spain_268835-1412.jpg?w=740"
    },

    // Sweden
    {
        title: "Sweden",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/stockholm-old-town-gamla-stan-sweden_1268-14882.jpg?w=740"
    },

    // Australia
    {
        title: "Australia",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/sydney-opera-house-sydney-australia_181624-38241.jpg?w=740"
    },

    // Japan
    {
        title: "Japan",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/tokyo-tower-japan_649448-2921.jpg?w=740"
    },

    // Philippines
    {
        title: "Philippines",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/manila-cathedral-philippines_181624-17239.jpg?w=740"
    },

    // Singapore
    {
        title: "Singapore",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/marina-bay-sands-night-singapore_181624-1683.jpg?w=740"
    },

    // South Korea
    {
        title: "South Korea",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/gyengbokgung-palace-seoul-south-korea_53876-15741.jpg?w=740"
    },

    // Hong Kong
    {
        title: "Hong Kong",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/hong-kong-skyline-night_181624-20487.jpg?w=740"
    },

    // China
    {
        title: "China",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/great-wall-china_181624-30348.jpg?w=740"
    },

    // UAE
    {
        title: "UAE",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/burj-khalifa-dubai_181624-13247.jpg?w=740"
    },

    // Bahrain
    {
        title: "Bahrain",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/manama-skyline-bahrain_181624-10898.jpg?w=740"
    },

    // Muscat (Oman)
    {
        title: "Muscat",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/sultan-qaboos-mosque-muscat-oman_181624-24345.jpg?w=740"
    },

    // Saudi Arabia
    {
        title: "Saudi Arabia",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/kingdom-centre-tower-riyadh-saudi-arabia_181624-18348.jpg?w=740"
    },

    // Qatar
    {
        title: "Qatar",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/doha-skyline-qatar_181624-20347.jpg?w=740"
    },

    // Israel
    {
        title: "Israel",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/western-wall-jerusalem-israel_181624-25018.jpg?w=740"
    },

    // South Africa
    {
        title: "South Africa",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/table-mountain-cape-town-south-africa_181624-38822.jpg?w=740"
    },
];

// ✅ Sort alphabetically
const sortedCities = [...cities].sort((a, b) =>
  a.title.localeCompare(b.title, "en", { sensitivity: "base" })
);
function ContactChapterInternatinalGrid() {
    return (
        <div className="container my-5">
            <div className="row">
                {sortedCities.map((item, index) => (
                    <div className="col-lg-4 col-md-6 mb-4 mx-auto" key={index}>
                        <div className="flip-card">
                            <div className="flip-card-inner shadow">
                                {/* Front Side */}
                                <div className="flip-card-front">
                                    <img src={item.img} alt={item.title} className="img-fluid" />
                                    <div className="chapter-overlay"></div>
                                    <div className="card-text">{item.title}</div>
                                </div>
                                {/* Back Side */}
                                <div className="flip-card-back">
                                    <h5>{item.poc.name}</h5>
                                    <p>Contact: {item.poc.contact}</p>
                                    <p>Email: {item.poc.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactChapterInternatinalGrid;
