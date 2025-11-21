import React from 'react';

const cities = [
    {
        title: "DELHI & NCR",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/typographic-optical-illusions-delhi_23-2150921914.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Mumbai",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/high-angle-shot-bandra-worli-sealink-mumbai-enveloped-with-fog_181624-9734.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Kolkata",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/premium-photo/victoria-memorial-is-monument-museum-located-kolkata-west-bengal-india_459244-68.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Bangalore",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/premium-photo/mysore-palace_78361-1014.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Hyderabad",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297157.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Assam",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/premium-photo/scenic-view-mountains-against-cloudy-sky_1048944-16107144.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Ahmedabad",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/mehrangarh-fort_1357-12.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Coimbatore",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/temple-atop-clouds-sunrise_23-2152002049.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Kochi",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/beautiful-sunrise-fishing-dip-nets-pakpra-phatthalung-thailand_335224-813.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Telangana ",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        },
        img: "https://img.freepik.com/free-photo/parinirvana-stupa-temple-kushinagar-india_554837-289.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
];

function ContactChapterGrid() {
    return (
        <div className="container my-5">
            <div className="row">
                {cities.map((item, index) => (
                    <div className="col-lg-4 col-md-6 mb-4 mx-auto" key={index}>
                        <div className="flip-card ">
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

export default ContactChapterGrid;
