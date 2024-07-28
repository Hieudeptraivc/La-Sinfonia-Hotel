import pageImg from "../assets/rooms/header-room.jpg";
import { motion } from "framer-motion";
function PageHeader() {
  return (
    <div className="relative flex h-[370px] sm:h-[450px] items-center justify-center   bg-yellow-300">
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
        className="z-20 flex flex-col items-center text-center text-white pt-28 lg:pt-28 md:pt-36 font-playfair"
      >
        <div className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Rooms & Suites
        </div>
        <p className="w-11/12 pt-2 my-2 text-xs tracking-widest sm:w-3/5 sm:text-base lg:text-base md:my-5 ">
          The rooms and suites at La Sinfonía Majesty feature elegant design and
          luxury amenities, with all the comforts of a luxury boutique hotel in
          the heart of Hanoi. Learn more about our special packages and offers
          for direct bookings.
        </p>
      </motion.div>
      <div className="absolute top-0 w-full h-full">
        <img
          className="object-cover w-full h-full"
          src={pageImg}
          alt={`La sifonia ${pageImg}`}
        ></img>
      </div>
      <div className="absolute w-full h-full bg-black/40"></div>
    </div>
  );
}

export default PageHeader;
