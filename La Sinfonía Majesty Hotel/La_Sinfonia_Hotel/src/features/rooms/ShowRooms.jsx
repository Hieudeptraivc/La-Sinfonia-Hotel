import { memo } from "react";
import { Link } from "react-router-dom";
import RoomsDetail from "../room/RoomsDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../../styles/pagination.css";
import {
  EffectCoverflow,
  FreeMode,
  Pagination,
  Navigation,
} from "swiper/modules";

import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import Spinner from "../../ui/Spinner";
import { motion } from "framer-motion";
import ErrorFallback from "../../ui/ErrorFallback";

const ShowRooms = () => {
  const {
    data: rooms,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  if (isPending) return <Spinner />;
  if (isError) return <ErrorFallback />;

  return (
    <motion.div
      initial={{ y: 220, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: 40 },
        opacity: { duration: 1 },
        ease: "backIn",
        duration: 1,
      }}
      className="pb-6 antialiased"
    >
      <div className="flex flex-row items-baseline justify-between px-2 py-3 md:py-8 sm:px-12 font-playfair">
        <p className="py-0 text-lg md:text-xl xl:text-2xl sm:py-6 ">
          ROOMS & SUITES
        </p>

        <Link to="/rooms" className="text-xs btn-96 md:text-sm xl:text-base">
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
              modules={[EffectCoverflow, FreeMode, Pagination, Navigation]}
              className="max-w-full lg:max-w-full "
            >
              {rooms.map((room) => (
                <SwiperSlide key={room.id}>
                  <div className="relative flex flex-col gap-6 px-6 py-4 mb-10 overflow-hidden shadow-lg cursor-pointer group rounded-xl">
                    <MemoizedRoomDetail room={room} />
                  </div>
                </SwiperSlide>
              ))}
              <div className="slider-controler">
                <div className="text-white swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="text-white swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const MemoizedRoomDetail = memo(RoomsDetail);

export default ShowRooms;
