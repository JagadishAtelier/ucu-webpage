import React from 'react';

const data = [
    {
        image: "https://nimbuscluster.blob.core.windows.net/server01/nhrdn/image/image-DIaU9aIq5ni15te8YDKQu-1659430960",
        place: "AGRA",
        poc: {
            name: "Rahul Sharma",
            contact: "+91 9876543210",
            email: "agra@example.com"
        }
    },
    {
        image: "https://nimbuscluster.blob.core.windows.net/server01/nhrdn/image/image-dH_eUmwAtIZlvUtlUxAyh-1659429471",
        place: "Ahmedabad",
        poc: {
            name: "Priya Patel",
            contact: "+91 9123456780",
            email: "ahmedabad@example.com"
        }
    },
    {
        image: "https://nimbuscluster.blob.core.windows.net/server01/nhrdn/image/image-gXYbYczFnCvOK9L7GE738-1719214655",
        place: "Alwar and Rewari",
        poc: {
            name: "Amit Verma",
            contact: "+91 9988776655",
            email: "alwar@example.com"
        }
    },
    {
        image: "https://nimbuscluster.blob.core.windows.net/server01/nhrdn/image/image-cmWvmon2e9du9aTpITX6G-1662549245",
        place: "Assam",
        poc: {
            name: "Sonia Das",
            contact: "+91 9876123456",
            email: "assam@example.com"
        }
    },
];

function ContactChapterGrid() {
    return (
        <div className="container my-5">
            <div className="row">
                {data.map((item, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                {/* Front Side */}
                                <div className="flip-card-front">
                                    <img src={item.image} alt={item.place} className="img-fluid" />
                                    <div className="chapter-overlay"></div>
                                    <div className="card-text">{item.place}</div>
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
