import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "react-bootstrap";

const data = [
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        thumbnail:
            "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
        para: "Abigail Kyra Zhang’s multi-city adventure with SP Jain Global",
        tabData: "studentsAlumni",
        author: "Rajesh Mehra",
        proffection: "CEO, InnovateCorp",
    },
    {
        videoUrl: "https://youtu.be/bhgVNTJUytA?si=FGAtsM2xOS8NPyRU",
        thumbnail:
            "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?cs=srgb&dl=pexels-moose-photos-1587009.jpg&fm=jpg",
        para: "Why a CTO chose to pursue an Executive MBA",
        tabData: "facultyIndustry",
        author: "Rajesh Mehra",
        proffection: "CEO, InnovateCorp",
    },
    {
        videoUrl: "https://youtu.be/ulaQhIpWY98?si=O_Ofh6g_EBIawX-C",
        thumbnail:
            "https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0",
        para: "Khaleej Times exclusive: Nitish Jain on the power of AI in education",
        tabData: "technologyInnovation",
        author: "Rajesh Mehra",
        proffection: "CEO, InnovateCorp",
    },
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        thumbnail:
            "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
        para: "Featured in National Media – Global Recognition",
        tabData: "inTheMedia",
        author: "Rajesh Mehra",
        proffection: "CEO, InnovateCorp",
    },
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        thumbnail:
            "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
        para: "Campus Tour: A glimpse into our vibrant Dubai campus",
        tabData: "campusTours",
        author: "Rajesh Mehra",
        proffection: "CEO, InnovateCorp",
    },
];

function CTCASection() {
    return (
        <div className="captital-campus-content-sec mt-5">
            <h1 className="text-center display-4 fw-bold">Career <span style={{color:"#5ac501"}}>Transformation</span> 2 Career <span style={{color:"#5ac501"}}>Acceleration (CT2CA)</span></h1>
            <p className="text-center pt">
                CT2CA is UCU’s career advancement track for professionals seeking strategic elevation. Through masterclasses, leadership dialogues, and domain-deepening modules, it empowers experienced learners to pivot, accelerate, or reinvent their careers in high-growth sectors.
                Then have a section to add photos + industry leader’s names

            </p>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                loop={true}

                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="cap-grid mt-5"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-center cap-card-div position-relative">
                            <img
                                src={item.thumbnail}
                                alt={item.para}
                                className="media-play-thumbnail"
                            />
                                            <div className="mga-overlay"></div>
<div className="mga-overlay-text">
                            <p className="text-center mt-3 mb-0 cap-para fs-5 fw-bold">{item.author}</p>
                            <p className="text-center m-0 cap-para">{item.proffection}</p>
</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="d-flex justify-content-center mt-4">
                <Button>View All</Button>
            </div>
        </div>
    )
}

export default CTCASection