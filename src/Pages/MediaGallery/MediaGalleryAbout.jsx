import { Play, X } from 'lucide-react';
import React, { useState } from 'react';

const data = [
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        thumbnail: "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
        para: "Abigail Kyra Zhang’s multi-city adventure with SP Jain Global",
        tabData: "studentsAlumni",
    },
    {
        videoUrl: "https://youtu.be/bhgVNTJUytA?si=FGAtsM2xOS8NPyRU",
        thumbnail: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?cs=srgb&dl=pexels-moose-photos-1587009.jpg&fm=jpg",
        para: "Why a CTO chose to pursue an Executive MBA",
        tabData: "facultyIndustry",
    },
    {
        videoUrl: "https://youtu.be/ulaQhIpWY98?si=O_Ofh6g_EBIawX-C",
        thumbnail: "https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0",
        para: "Khaleej Times exclusive: Nitish Jain on the power of AI in education",
        tabData: "technologyInnovation",
    },
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        thumbnail: "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
        para: "Featured in National Media – Global Recognition",
        tabData: "inTheMedia",
    },
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        thumbnail: "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
        para: "Campus Tour: A glimpse into our vibrant Dubai campus",
        tabData: "campusTours",
    },
];

function convertToEmbedUrl(url) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
}

function MediaGalleryAbout() {
    const [modalVideo, setModalVideo] = useState(null);
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { key: "all", label: "SHOW ALL" },
        { key: "studentsAlumni", label: "STUDENTS & ALUMNI" },
        { key: "facultyIndustry", label: "FACULTY & INDUSTRY SPEAK" },
        { key: "technologyInnovation", label: "TECHNOLOGY & INNOVATION" },
        { key: "inTheMedia", label: "IN THE MEDIA" },
        { key: "campusTours", label: "CAMPUS TOURS" },
    ];

    const filteredData =
        activeTab === "all" ? data : data.filter(item => item.tabData === activeTab);

    return (
        <div className='captital-campus-content-sec my-4'>
            <p>
                At SP Jain, we have a thriving community of students, faculty and alumni
                from over 30 countries with diverse ideas, strength and experiences.
                These perspectives come together to inspire, engage and enrich the shared
                learning every day. Our commitment to diversity, offering global education
                and fostering a nurturing culture has helped our community grow. We
                welcome you to discover this very experience through a selection of videos
                to help you get to know us better.
            </p>

            <div>
                {/* <h1 className='my-3 display-4 fw-bold text-center' style={{color: "#005bd4"}}>OUR VIDEO GALLERY</h1> */}
                <h1 className='my-4 display-5 fw-bold text-center'>OUR <span style={{color:"#5ac501"}}> VIDEO </span> GALLERY</h1>

                {/* Tabs Section */}
                <div className='d-flex flex-wrap gap-3 mb-4'>
                    {tabs.map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>



                {/* Grid Section (unchanged design) */}
                <div className='mga-grid'>
                    {filteredData.map((item, index) => (
                        <div key={index} className="mga-card-div position-relative" onClick={() => setModalVideo(item.videoUrl)}>
                            <img
                                src={item.thumbnail}
                                alt={item.para}
                                className="media-play-thumbnail"
                            />
                            <div className="mga-overlay"></div>
                            <p className="mga-overlay-text">{item.para}</p>
                        </div>

                    ))}
                </div>

                {/* Modal (unchanged design) */}
                {modalVideo && (
                    <div className="video-modal" onClick={() => setModalVideo(null)}>
                        <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                            <iframe
                                className="video-modal-i-frame"
                                src={convertToEmbedUrl(modalVideo)}
                                title="Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <button className="close-button-participant" onClick={() => setModalVideo(null)}>
                                <X />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MediaGalleryAbout;
