import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
////
/*const images = [
  "http://localhost:1337/uploads/slide_1_b2922c5fbe.jpg",
  "http://localhost:1337/uploads/slide_2_2cea20a383.jpg",
  "http://localhost:1337/uploads/slide_3_8e2cb052d1.jpg",
];*/
import Img1 from "../assets/slide-1.jpg";
import Img2 from "../assets/slide-2.jpg";
import Img3 from "../assets/slide-3.jpg";

const images = [Img1, Img2, Img3];
function Slider() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="h-[600px] lg:[950px]"
    >
      {images.map((img, index) => {
        return (
          <SwiperSlide
            className="relative flex items-center justify-center h-full bg-yellow-300"
            key={index}
          >
            <div className="z-20 text-xl font-semibold text-center text-white lg:pb-42 font-playfair">
              <motion.div
                initial={{ y: -220, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 40 },
                  opacity: { duration: 1 },
                  ease: "backIn",

                  duration: 0.8,
                }}
                className="font-semibold sm:text-2xl lg:text-4xl"
              >
                La Sinfonía Majesty Hotel & Spa
              </motion.div>
              <motion.p
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 1,
                  y: { type: "spring", stiffness: 70 },
                  opacity: { duration: 2 },
                  ease: "backIn",

                  duration: 1,
                }}
                className="pt-2 my-5 text-xs tracking-widest sm:text-base lg:text-xl "
              >
                A serene oasis in the heart of Hanoi
              </motion.p>
            </div>
            <div className="absolute top-0 w-full h-full">
              <motion.img
                transition={{
                  type: "spring",
                  damping: 10,
                  staggerDirection: 100,
                }}
                animate={{ scale: 1.05 }}
                className="object-cover w-full h-full"
                src={img}
                alt={`La sifonia ${img}`}
              ></motion.img>
            </div>
            <div className="absolute w-full h-full bg-black/60"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
