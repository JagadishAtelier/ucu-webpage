import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { CalendarDays, IndianRupee } from "lucide-react";
import { Button } from "react-bootstrap";

const programmeData = [
    {
        title: "Chief Growth and Marketing Officer",
        desc: "Advancing Marketing Leaders as Architects of Global Growth",
        date: "Nov 30, 2025",
        price: "INR 6,00,000 + taxes",
    },
    {
        title: "General Management Programme",
        desc: "Refine Your Leadership Vision.",
        date: "Dec 14, 2025",
        price: "INR 8,75,000 + taxes",
    },
    {
        title: "Business Storytelling and Executive Presence",
        desc: "Use the power of communication to lead effectively.",
        date: "Nov 23, 2025",
        price: "INR 1,10,000 + taxes",
    },
];

function EEPUpcoming() {
    return (
        <div className="eep-upcoming-section captital-campus-content-sec">
            <div className="d-flex flex-column gap-2 justify-content-center mb-5">
                <h1 className="eep-upcoming-title text-center fw-bold">
                    Upcoming Programmes
                </h1>
                <Button className="mx-auto" style={{backgroundColor:"#5ac501",border:"none"}}>View more</Button>
            </div>
            <div className="container">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000 }}
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="eep-upcomming-swiper pb-4 px-3"
                >
                    {programmeData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="eep-programme-card shadow">
                                <h4 className="eep-programme-title fw-bold">{item.title}</h4>
                                <div className="eep-programme-body">
                                    <div className="eep-programme-info">
                                        <p>{item.desc}</p>
                                        <p className="mb-1">
                                            <CalendarDays size={16} className="me-2" />
                                            {item.date}
                                        </p>
                                        <p>
                                            <IndianRupee size={16} className="me-2" />
                                            {item.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="eep-programme-footer mt-auto">
                                    <Button className="eep-know-btn" style={{backgroundColor:"#5ac501",border:"none"}}>Know More</Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default EEPUpcoming;
