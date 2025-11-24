import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
const data = [
    {head : "Lorem ipsum-1",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image : "https://img.freepik.com/free-photo/student-sharing-her-knowledge-with-her-colleagues_329181-8498.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {head : "Lorem ipsum-2",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image : "https://img.freepik.com/premium-photo/professor-teaching-group-students-library_13339-284868.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
]
function CampusGateway() {
  return (
    <div className="captital-campus-content-sec">
        <h1 className=" mb-3 display-4 fw-bold">Chennai: <span style={{color:"#5ac501"}}>Gateway to opportunity</span></h1>
      <div className="campus-gateway-slider-container">
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev custom-prev">
          <ChevronLeft />
        </div>
        <div className="swiper-button-next custom-next">
          <ChevronRight />
        </div>
            <Swiper
             modules={[Autoplay, Navigation, Pagination]}
             spaceBetween={30}
             slidesPerView={1}
             navigation
            //  pagination={{clickable:true}}
             autoplay={{delay : 3000 ,disableOnInteraction : false}}
             loop={true}
               observer={true}
  observeParents={true}
             className="campus-gateway-swiper"
            >
                {data.map((item,index)=>(
                    <SwiperSlide key={index}>
                        <div className="d-flex flex-lg-row flex-column campus-gateway-slider-swiper-div align-items-center">
                            <div className="campus-gateway-slider-content">
                                <h1>{item.head}</h1>
                                <p className="col-12">{item.content}</p>
                            </div>
                            <img src={item.image}  className="campus-gateway-slider-image"/>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    </div>
  )
}

export default CampusGateway