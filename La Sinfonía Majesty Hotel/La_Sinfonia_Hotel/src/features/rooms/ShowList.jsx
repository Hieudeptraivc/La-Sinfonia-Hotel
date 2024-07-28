import { memo } from "react";
import RoomsDetail from "../room/RoomsDetail";
import Spinner from "../../ui/Spinner";
import useRooms from "./useRooms";

function ShowList() {
  const { rooms, isPending, isError } = useRooms();

  if (isPending) return <Spinner />;
  if (isError) return <span>Error</span>;

  return (
    <div className="py-6 lg:px-3">
      <div className="py-2 font-semibold text-center md:py-10 sm:text-2xl md:text-3xl font-playfair">
        La Sinfonía Majesty Hotel and Spa
      </div>
      <div className="grid items-center mx-2 xl:mx-10 lg:gap-x-8 lg:gap-y-4 lg:px-24 lg:grid-cols-2 xl:grid-cols-6 md:grid-cols-1 sm:grid-cols-1">
        {rooms?.map((room, i) => (
          <div
            key={room.id}
            className={`mt-4 ${
              i < 2
                ? "lg:col-span-1 xl:col-span-3"
                : "lg:col-span-1 xl:col-span-2"
            }`}
          >
            <MemoizedRoomDetail room={room} type={i < 2 ? "big" : "small"} />
          </div>
        ))}
      </div>
    </div>
  );
}

const MemoizedRoomDetail = memo(RoomsDetail);

export default ShowList;
