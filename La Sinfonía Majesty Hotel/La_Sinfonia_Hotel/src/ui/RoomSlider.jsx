import { Link } from "react-router-dom";
import RoomsDetail from "./RoomsDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../styles/pagination.css";
import {
  EffectCoverflow,
  FreeMode,
  Pagination,
  Navigation,
} from "swiper/modules";

function RoomSlider() {
  return (
    <div className="pb-6 antialiased">
      <img src=""></img>
      <div className="flex flex-row items-baseline justify-between px-12 py-8 font-playfair">
        <p className="py-6 text-2xl ">ROOMS & SUITES</p>

        <Link to="/rooms" className="btn-96">
          View All
        </Link>
      </div>

      <section>
        <div>
          <div className="flex items-center justify-center flex-col h-[900px] bg-[#000000]">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2,
              }}
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                700: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                950: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1240: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              freeMode={false}
              pagination={{
                dynamicBullets: true,
                el: ".swiper-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, FreeMode, Pagination, Navigation]} // Add Navigation here
              className="max-w-full lg:max-w-full "
            >
              {rooms.map((room) => (
                <SwiperSlide key={room.id}>
                  <div className="relative flex flex-col gap-6 px-6 py-4 mb-10 overflow-hidden shadow-lg cursor-pointer group rounded-xl">
                    <RoomsDetail room={room} key={room.id} />
                  </div>
                </SwiperSlide>
              ))}
              <div className="slider-controler ">
                <div className="text-white swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="text-white swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className=" swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoomSlider;
