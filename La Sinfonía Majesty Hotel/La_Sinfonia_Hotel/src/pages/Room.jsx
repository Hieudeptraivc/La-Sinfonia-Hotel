import { useParams } from "react-router-dom";
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import imgPage from "../assets/rooms/header-room.jpg";
import Spinner from "../ui/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";

import { RiHotelLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";

import { TbAirConditioning } from "react-icons/tb";
import { GiWifiRouter } from "react-icons/gi";
import IconRoom from "../ui/IconRoom";

import RoomAmenities from "../features/room/RoomAmenities";
import BenefitRoom from "../ui/BenefitRoom";
import ShowRooms from "../features/rooms/ShowRooms";

import { motion } from "framer-motion";
import ScrollToTop from "../hooks/scrollToTop";

import Facilities from "../ui/Facilities";
import TravelGuide from "../ui/TravelGuide";

import { useRoom } from "../features/room/useRoom";
import CreateBooking from "../features/booking/CreateBooking";
function Room() {
  const { id } = useParams();

  const { room, isPending, isError } = useRoom(id);

  const amenities = room?.attributes.amenities;
  if (isPending)
    return (
      <div className="py-48 bg-black">
        <Spinner />;
      </div>
    );

  const { especially, bath, facilities, others } = amenities;
  if (isError) {
    return <span>Error</span>;
  }

  const imgSlide = room?.attributes.images.data.map(
    (img) => `http://127.0.0.1:1337${img.attributes.url}`
  );
  return (
    <article className="min-w-[414px] antialiased ">
      <ScrollToTop />
      <div className=" z-20 relative flex h-[520px] lg:[600px] items-center justify-center   bg-yellow-300">
        <div className="z-20 flex flex-col items-center pt-0 pb-6 text-center text-white sm:pt-20 lg:pt-0 lg:pb-0 ">
          <div className="flex flex-col items-center py-4 text-xl lg:text-4xl">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0 },
                ease: "backIn",

                duration: 1,
              }}
              className="font-semibold lg:py-2 font-playfair"
            >
              {room.attributes.name}
            </motion.p>
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 2 },
                ease: "backIn",

                duration: 1,
              }}
              className="w-11/12 py-4 text-base font-light md:w-4/6 sm:w-4/5 sm:text-base lg:text-xl"
            >
              {room.attributes.description}
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full">
          <img
            className="object-cover w-full h-full "
            src={imgPage}
            alt={`La sifonia ${imgPage}`}
          ></img>
        </div>
        <div className="absolute w-full h-full bg-black/50"></div>
      </div>
      <div className=" h-[3960px] sm:h-[3750px] md:h-[3400px] lg:h-[3400px] xl:h-[3450px] lg:py-0     ">
        <div className="absolute left-0   mx-auto  right-0 z-40 h-full bg-white min-w-[414px] w-10/12 sm:translate-y-5 top-96 ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
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
            className="w-full"
          >
            {imgSlide?.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  className="object-cover   lg:h-[550px] lg:w-[1266px]"
                  src={image}
                  alt={room.attributes.name}
                />
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
          <motion.section
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
            className="mx-auto text-center "
          >
            <div className="flex flex-col items-center ">
              <div className="py-2 lg:py-4 font-playfair">
                <p className="py-2 text-2xl md:text-3xl lg:text-4xl">
                  {room.attributes.name}
                </p>
                <div className="w-36 h-[2px] mx-auto my-2  bg-yellow-600 separator"></div>
              </div>
              <div className="grid grid-cols-2 gap-6 py-6 text-base font-thin md:text-lg lg:text-xl md:py-0 md:gap-8 sm:pt-4 md:pt-0 md:grid-cols-5">
                <IconRoom icon={<MdOutlinePeopleAlt />}>2 Guests</IconRoom>
                <IconRoom icon={<IoBedOutline />}>
                  King-size bed / Twin beds
                </IconRoom>
                <IconRoom icon={<RiHotelLine />}>City View</IconRoom>
                <IconRoom icon={<GiWifiRouter />}>Free Wifi</IconRoom>
                <IconRoom icon={<TbAirConditioning />}>
                  Air Conditioner
                </IconRoom>
              </div>
            </div>
          </motion.section>
          <motion.section
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
            className="mx-auto max-w-[1190px] font-thin text-center "
          >
            <div className="py-1 lg:py-4 font-playfair">
              <p className="py-1 text-xl md:text-2xl lg:text-3xl ">Overview</p>
              <div className="w-36 h-[2px] mx-auto my-2  bg-yellow-600 separator"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="col-span-1 mx-2 md:text-lg lg:text-xl md:col-span-2 sm:mx-12 md:mx-16">
                {room.attributes.details}
              </div>
              <div className="ml-12 sm:ml-32">
                <RoomAmenities type="room" room={room.attributes} />
              </div>

              <CreateBooking room={room} />
            </div>
          </motion.section>
          <motion.section
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
            className="mx-auto text-center"
          >
            <div className="py-6 md:py-12 font-playfair">
              <p className="py-1 text-xl md:text-2xl lg:text-3xl ">
                Benefits & Highlights
              </p>
              <div className="w-36 h-[2px] mx-auto my-2  bg-yellow-600 separator"></div>
            </div>
            <div className="grid grid-cols-1  gap-10 max-w-[820px] md:grid-cols-2 mx-auto">
              <BenefitRoom value={especially}>Especially for you</BenefitRoom>
              <BenefitRoom value={facilities}>Room Facilities</BenefitRoom>
              <BenefitRoom value={bath}>Bed & Bath</BenefitRoom>
              <BenefitRoom value={others}>Others</BenefitRoom>
            </div>
          </motion.section>
          <motion.section
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
            className=" max-w-[900px] mx-auto text-center"
          >
            <div className="py-6 lg:py-8 font-playfair">
              <p className="py-1 text-xl md:text-2xl lg:text-3xl ">
                House Rules
              </p>
              <div className="w-36 h-[2px] mx-auto my-2  bg-yellow-600 separator"></div>
            </div>
            <div className="mx-10 md:mx-0">
              <div className="grid grid-cols-1 py-4 border-b-2 text-start md:grid-cols-2 ">
                <span className="font-semibold md:text-lg xl:text-xl ">
                  Check-In
                </span>
                <p className="text-base font-thin tracking-wide md:text-lg xl:text-xl">
                  From 14:00
                </p>
              </div>
              <div className="grid grid-cols-1 py-4 border-b-2 text-start md:grid-cols-2 ">
                <span className="font-semibold md:text-lg xl:text-xl">
                  Check-out
                </span>
                <p className="text-base font-thin tracking-wide md:text-lg xl:text-xl">
                  Until 12:00
                </p>
              </div>
              <div className="grid grid-cols-1 py-4 border-b-2 text-start md:grid-cols-2 ">
                <span className="font-semibold md:text-lg xl:text-xl">
                  Luggage storage
                </span>
                <p className="text-base font-thin tracking-wide md:text-lg xl:text-xl">
                  Available 24/7
                </p>
              </div>
              <div className="grid grid-cols-1 py-4 border-b-2 text-start md:grid-cols-2 ">
                <span className="font-semibold md:text-lg xl:text-xl">
                  Cancellation/Amendment Policy
                </span>
                <div className="text-start">
                  <div className="font-semibold md:text-lg xl:text-xl ">
                    * Non-refundable rate: no cancellation/amendment is applied
                  </div>
                  <div className="pt-5 font-semibold md:text-lg xl:text-xl">
                    * Refundable rates:
                  </div>
                  <div className="py-3 text-base font-thin tracking-wide md:text-lg xl:text-xl">
                    <p className="py-3">
                      - Any cancellation/amendment is made 72 hours prior to
                      your arrival date: Free of Charge.
                    </p>
                    <p className="py-3">
                      - Any cancellation/amendment is made within 72 hours prior
                      to your arrival date, including the booking(s) made within
                      this period of time: the amount of the first night stay
                      will be charged{" "}
                    </p>
                    <p className="py-3">
                      - In case of no-show: 100% amount of full length of stay
                      will be charged
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 py-4 border-b-2 text-start md:grid-cols-2 ">
                <span className="font-semibold md:text-lg xl:text-xl">
                  Child policies
                </span>
                <div className="text-base font-thin tracking-wide md:text-lg xl:text-xl">
                  <div>All children are welcome.</div>
                  <div className="pt-4">
                    <span className="font-semibold md:text-lg xl:text-xl ">
                      Child under 06 years old:{" "}
                    </span>{" "}
                    Free of Charge, sharing bed with parents, including
                    breakfast.
                  </div>
                  <div className="pt-4">
                    <div className="font-semibold md:text-lg xl:text-xl">
                      Child from 06 to under 12 years old:
                    </div>
                    <p className="pt-5">
                      - Sharing bed with parent: surcharge VND
                      235,000/room/night, including breakfast; OR
                    </p>
                    <p className="pt-5">
                      - Using extra bed: surcharge VND 587,500/room/night,
                      including breakfast.
                    </p>
                    <p className="pt-5">
                      Child from 12 years old is considered a adult. Extra bed
                      is required at surcharge of VND 587,500/room/night,
                      including breakfast.
                    </p>
                    <p className="pt-5">Maximum 01 extra bed per room</p>
                    <p className="pt-5">
                      Baby cot is available upon request and free of charge.
                      Maximum 01 cot per room.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 py-4 border-b-2 text-start md:grid-cols-2 ">
                <span className="font-semibold md:text-lg xl:text-xl">
                  Pets
                </span>
                <p className="text-base font-thin tracking-wide md:text-lg xl:text-xl">
                  Pets are not allowed
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
      <ShowRooms />
      <Facilities />
      <TravelGuide />
    </article>
  );
}

export default Room;
