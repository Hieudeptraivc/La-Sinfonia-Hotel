import { motion } from "framer-motion";
import img1 from "../assets/guide/g1.jpg";
import img2 from "../assets/guide/g2.jpg";
import img3 from "../assets/guide/g3.jpg";
import img4 from "../assets/guide/g4.jpg";
import img5 from "../assets/guide/g5.jpg";
const imgGrid = [
  { title: "Attractions", image: img1 },
  { title: "Night Life", image: img2 },
  { title: "Fpod & Drinks", image: img3 },
  { title: "Shopping", image: img4 },
  { title: "Do & Don'ts", image: img5 },
];
function TravelGuide() {
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
      className=""
    >
      <div className="w-full px-2 md:px-24">
        <div className="flex items-center justify-between font-playfair">
          <p className="text-lg uppercase md:text-xl xl:text-2xl ">
            TRAVEL GUIDE
          </p>
          <div className="text-xs btn-96 md:text-sm xl:text-base">
            Explore more
          </div>
        </div>
        <p className="text-[18px] font-thin hidden sm:block w-4/6">
          Discover our extensive guide for first-timers in Hanoi with
          recommendations for local dishes, tourist attractions and travel tips
          for Vietnam’s vibrant city!
        </p>
      </div>

      <ImageGrid />
    </motion.div>
  );
}
function ImageGrid() {
  return (
    <ul className="gap-6 py-8 sm:py-12 grid md:max-w-[1300px] h-[1500px] md:h-[800px] grid-cols-1 md:grid-cols-3 mx-8 md:mx-auto">
      {imgGrid.map((items, i) => (
        <li
          key={items.title}
          className={`relative  group  overflow-hidden   ${i === 0 ? "col-span-1 md:col-span-2" : "md:col-span-1"} `}
        >
          <div className="relative justify-center w-full h-full ">
            <img
              className="absolute w-full h-full duration-500 group-hover:scale-110 object-fit "
              src={items.image}
              alt={items.title}
              loading="lazy"
            />
            <button className="absolute px-4 py-2 mx-auto text-xl text-center text-white transition-all duration-500 border border-solid hover:bg-slate-100 hover:text-black inset-x-8 max-w-48 group-hover:z-50 bottom-10 group-hover:mb-16 group-hover:sm:mb-24 font-playfair">
              {items.title}
            </button>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 bg-black opacity-0 bg-opacity-70 group-hover:opacity-100"></div>
        </li>
      ))}
    </ul>
  );
}
export default TravelGuide;
