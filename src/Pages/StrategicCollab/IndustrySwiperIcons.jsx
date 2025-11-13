import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
    "https://mmachennai.org/images/mma-logo.png",
    "https://www.nationalhrd.org/img/59.06ca3e5e.png",
    "https://www.cii.in/images_new/cii-logoNew.png",
    "https://nasscom.in/themes/custom/nasscomredesigntheme/images/Logo-White.svg",
    "https://www.aima.in/img/logo.png",
    "https://data.maglr.com/4152/issues/62012/740163/assets/media/9a00155741592bbb27389c63b0467c96c6326d7fc60477999679d656baaa8a1d.png",
    "https://www.nipm.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-nipm.035f6e5c.png&w=1200&q=75",
    "https://tie.org/wp-content/uploads/2024/09/tielogo23413.png",
    "https://www.iru.org/sites/default/files/styles/mobile_1x_305x161/public/2021-06/FICCI.png?h=f2467a05&itok=plXfl54s"
];

const gImag = [
    "https://www.tnskill.tn.gov.in/wp-content/uploads/2025/02/tnskill-logo-250x125-1.png",
    "https://investingintamilnadu.com/DIGIGOV/themes/tnswp/images/homepage-images/header-section-images/gui-logo-black.png"
]

function InternationalCollabSwiper() {
    return (
        <div className="captital-campus-content-sec mt-4">
            <h1 className="text-center mb-4">Industry & Professional Associations</h1>
            <div style={{ backgroundColor: "#0c0142", padding: "30px 10px" }}>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={5}
                    spaceBetween={30}
                    speed={4000} // smooth scroll speed
                    autoplay={{
                        delay: 0, // no pause between transitions
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false} // prevent dragging
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 15 },
                        1024: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                    style={{
                        transitionTimingFunction: "linear", // continuous movement
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: "12px",
                                    padding: "15px 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "80px",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`collab-${index}`}
                                    style={{
                                        width: "100%",
                                        height: "50px",
                                        objectFit: "contain",
                                        // 👇 Apply special style only for CII logo
                                        filter:
                                            img === "https://www.cii.in/images_new/cii-logoNew.png"
                                                ? "invert(1)"
                                                : img === "https://nasscom.in/themes/custom/nasscomredesigntheme/images/Logo-White.svg"
                                                    ? "invert(1)"
                                                    : "none",

                                    }}
                                />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <h1 className="text-center my-4">Government Associations</h1>
            <div style={{ backgroundColor: "#0c0142", padding: "30px 10px" }}>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    speed={4000} // smooth scroll speed
                    autoplay={{
                        delay: 0, // no pause between transitions
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false} // prevent dragging
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 1, spaceBetween: 15 },
                        1024: { slidesPerView: 1, spaceBetween: 20 },
                    }}
                    style={{
                        transitionTimingFunction: "linear", // continuous movement
                    }}
                >
                    {gImag.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: "12px",
                                    padding: "15px 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "80px",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`collab-${index}`}
                                    style={{
                                        width: "100%",
                                        height: "50px",
                                        objectFit: "contain",
                                        // 👇 Apply special style only for CII logo
                                        filter:
                                            img === "https://www.cii.in/images_new/cii-logoNew.png"
                                                ? "invert(1)"
                                                : img === "https://nasscom.in/themes/custom/nasscomredesigntheme/images/Logo-White.svg"
                                                    ? "invert(1)"
                                                    : "none",

                                    }}
                                />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default InternationalCollabSwiper;
