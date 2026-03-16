import { Play, X } from 'lucide-react';
import React, { useState } from 'react';

const data = [
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        thumbnail: "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
        para: "Abigail Kyra Zhang’s multi-city adventure with UCU",
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
        para: "The power of AI in modern education",
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
        para: "Campus Tour: A glimpse into our vibrant Chennai campus",
        tabData: "campusTours",
    },
];

function convertToEmbedUrl(url) {
    if (url.includes("youtu.be/")) {
        const videoId = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
}

function MediaGalleryAbout() {
    const [modalVideo, setModalVideo] = useState(null);
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { key: "all", label: "SHOW ALL" },
        { key: "studentsAlumni", label: "STUDENTS & ALUMNI" },
        { key: "facultyIndustry", label: "FACULTY & INDUSTRY" },
        { key: "technologyInnovation", label: "TECH & INNOVATION" },
        { key: "inTheMedia", label: "IN THE MEDIA" },
        { key: "campusTours", label: "CAMPUS TOURS" },
    ];

    const filteredData = activeTab === "all" ? data : data.filter(item => item.tabData === activeTab);

    return (
        <div className='my-5'>
            <div className="container text-center mb-5">
                <p className="lead text-muted mx-auto" style={{ maxWidth: '900px' }}>
                    At UCU, we have a thriving community of students, faculty and alumni from over 30 countries. 
                    Discover their unique perspectives through our curated video gallery.
                </p>
                
                <h1 className='my-5 display-4 fw-bold'>OUR <span style={{color:"#5ac501"}}> VIDEO </span> GALLERY</h1>

                {/* Modern Tab Navigation */}
                <div className='d-flex flex-wrap justify-content-center gap-2 mb-5'>
                    {tabs.map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-4 py-2 border-0 rounded-pill fw-bold transition-all ${
                                activeTab === tab.key 
                                ? 'bg-success text-white' 
                                : 'bg-light text-secondary'
                            }`}
                            style={{ fontSize: '0.75rem', letterSpacing: '1px' }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className='row g-4'>
                    {filteredData.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div 
                                className="ucu-media-page-card overflow-hidden position-relative group" 
                                style={{ height: '280px' }}
                                onClick={() => setModalVideo(item.videoUrl)}
                            >
                                <img
                                    src={item.thumbnail}
                                    alt={item.para}
                                    className="w-100 h-100 object-fit-cover ucu-event-page-image"
                                />
                                <div 
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4"
                                    style={{ background: 'linear-gradient(to top, rgba(8, 22, 114, 0.9), transparent)', zIndex: 1 }}
                                >
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="text-white fw-bold mb-0 pe-4" style={{ fontSize: '1.1rem' }}>{item.para}</p>
                                        <div 
                                            className="bg-success rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ minWidth: '45px', minHeight: '45px' }}
                                        >
                                            <Play size={20} fill="white" color="white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Premium Video Modal */}
            {modalVideo && (
                <div 
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(8, 22, 114, 0.95)', zIndex: 9999 }}
                    onClick={() => setModalVideo(null)}
                >
                    <div className="position-relative w-100 px-3" style={{ maxWidth: '1000px' }} onClick={e => e.stopPropagation()}>
                        <div className="ratio ratio-16x9 shadow-lg rounded-4 overflow-hidden bg-black">
                            <iframe
                                src={convertToEmbedUrl(modalVideo)}
                                title="YouTube Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <button 
                            className="position-absolute border-0 bg-transparent text-white" 
                            style={{ top: '-40px', right: '10px' }}
                            onClick={() => setModalVideo(null)}
                        >
                            <X size={32} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MediaGalleryAbout;
