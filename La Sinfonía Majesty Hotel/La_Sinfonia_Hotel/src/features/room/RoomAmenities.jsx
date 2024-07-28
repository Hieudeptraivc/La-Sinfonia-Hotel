import { LuHotel } from "react-icons/lu";
import { RiHotelLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaSmokingBan, FaShower } from "react-icons/fa";
import RoomDescription from "./RoomDescription";
function RoomAmenities({ room, type }) {
  const { beds, views, showers, size, smoking } = room.amenities;
  const { adults, kids } = room.occupancy;
  return (
    <div className="flex flex-col py-6 antialiased font-light">
      <RoomDescription type={type} icon={<LuHotel />}>
        Room size: {size} m
      </RoomDescription>
      <RoomDescription type={type} icon={<RiHotelLine />}>
        {views.length > 1 ? views.at(0) + " + " + views.at(1) : views}
      </RoomDescription>
      <RoomDescription type={type} icon={<IoBedOutline />}>
        {beds.length > 1
          ? `0${beds.at(0).num + " " + beds.at(0).name} or  0${beds.at(1).num + " " + beds.at(1).name}`
          : `${beds}`}
      </RoomDescription>
      <RoomDescription type={type} icon={<MdOutlinePeopleAlt />}>
        Max occupancy:{" "}
        {kids > 0
          ? `0${adults} adults & 0${kids} child under 4 years old`
          : `0${adults} adults `}
      </RoomDescription>
      <RoomDescription type={type} icon={<FaSmokingBan />}>
        {smoking ? "Smoking" : "Non smoking"}
      </RoomDescription>
      <RoomDescription type={type} icon={<FaShower />}>
        {showers.length > 1 ? showers.at(0) + " + " + showers.at(1) : showers}
      </RoomDescription>
    </div>
  );
}

export default RoomAmenities;
