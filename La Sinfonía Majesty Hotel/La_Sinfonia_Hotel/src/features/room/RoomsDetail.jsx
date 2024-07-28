import BookButton from "../../ui/BookButton";
import RoomInformation from "./RoomInformation";
import { motion } from "framer-motion";
function RoomsDetail({ room, type = "default" }) {
  const { name, price } = room.attributes;
  const { id } = room;
  const imgURL = `http://127.0.0.1:1337${room.attributes.img.data?.attributes.url}`;

  const imageHeight = {
    default: "max-h-[330px]",
    big: "h-[230px] xl:h-[360px]",
    small: "h-[230px]",
  };
  const height = {
    default: "h-[800px]",
    big: "h-[750px] sm:h-[660px] lg:h-[780px] xl:h-[815px]",
    small: "h-[690px] md:h-[700px] xl:h-[770px]  2xl:h-[720px] ",
  };

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
      className={` shadow-2xl rounded-xl bg-slate-100   ${height[type]}  group relative`}
    >
      <div className="overflow-hidden rounded-b-none rounded-xl ">
        <img
          className={`object-cover w-full transition-all duration-300 ${imageHeight[type]}  full group-hover:scale-125`}
          src={imgURL}
          alt={name}
          loading="lazy"
        />
      </div>
      <RoomInformation room={room.attributes} />
      <div
        className={`absolute flex items-center gap-2 ${type === "big" ? "px-2 sm:px-4 xl:px-6 " : "px-2 sm:px-4 "} justify-between w-full  bottom-2`}
      >
        <BookButton id={id} />
        <div className="flex flex-col items-center">
          <p className="text-xs text-yellow-700">Check Price & Available</p>
          <p className="text-xl font-semibold text-yellow-800 md:text-2xl">
            ${price}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default RoomsDetail;
