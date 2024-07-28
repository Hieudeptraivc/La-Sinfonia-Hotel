import img from "../assets/reservations.jpg";
import BookingsOperation from "../features/booking/BookingsOperation";
import BookingsTable from "../features/booking/BookingsTable";
import TravelGuide from "../ui/TravelGuide.jsx";
// import { useBookingsByUserId } from "../features/booking/useBookings";
import { motion } from "framer-motion";
import ScrollToTop from "../hooks/scrollToTop.js";

function Reservations() {
  return (
    <div className="flex flex-col min-w-[414px] antialiased pb-0 md:pb-48">
      <ScrollToTop />
      <div className=" z-20 relative flex h-[450px] md:h-[450px] items-center justify-center   bg-yellow-300">
        <div className="z-20 flex flex-col items-center pt-20 text-center text-white lg:pt-0 md:pb-2 ">
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
            className=" font-playfair"
          >
            <p className="text-2xl font-semibold md:text-4xl">Bookings</p>
            <p className="pt-8 sm:text-base md:text-xl ">
              La Sinfonía Majesty Hotel and Spa
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 w-full h-full">
          <img
            className="object-cover w-full h-full"
            src={img}
            alt={`La sifonia ${img}`}
          ></img>
        </div>
        <div className="absolute w-full h-full bg-black/50"></div>
      </div>
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
        className=" custom-height min-h-[1140px]"
      >
        <div className="left-0 right-0 z-40 my-4 h-full mx-auto bg-white min-w-[414px] w-11/12   ">
          <div className="flex flex-col items-center justify-between gap-4 px-6 py-2 sm:py-8 sm:px-12 md:gap-0 md:flex-row">
            <div className="text-lg uppercase sm:text-2xl font-playfair">
              All Bookings
            </div>
            <BookingsOperation />
          </div>
          <BookingsTable />
        </div>
        <TravelGuide />
      </motion.div>
    </div>
  );
}

export default Reservations;
