import RoomAmenities from "./RoomAmenities";

function RoomInformation({ room }) {
  const { description, name } = room;
  return (
    <div className="mx-8 ">
      <div className="">
        <p className="py-1 text-xl text-yellow-600 md:text-2xl font-jacques">
          {name}
        </p>
        <p className=" text-base md:text-lg font-extralight =">{description}</p>
      </div>
      <RoomAmenities room={room} />
    </div>
  );
}

export default RoomInformation;
