import { format, isToday } from "date-fns";
import { formatDistanceFromNow, getDateWithoutTime } from "../../utils/helpers";
import { useRoom } from "../room/useRoom";
import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { DeleteBooking } from "./DeleteBooking";
function BookingRow({ booking }) {
  const { id: bookingId, attributes: bookingDetails } = booking;
  const { id: roomId, attributes: room } = bookingDetails.room.data;
  const { room: roomImg, isPending } = useRoom(roomId);
  const Img = roomImg?.attributes.img.data.attributes.url;

  const { dateEnd, dateStart, adults, kids, totalPrice, numNight } =
    bookingDetails;
  const today = getDateWithoutTime();

  const status =
    dateStart > today
      ? "Confirmed"
      : dateStart <= today && today <= dateEnd
        ? "Operational"
        : dateEnd < today
          ? "Completed"
          : "";

  return (
    <li className="grid items-start grid-cols-11 py-4 border-b sm:items-center sm:grid-cols-12 border-accent-200 bg-accent-100 text-start font-roboto">
      {/*Room img*/}
      <div className="hidden pl-2 text-center sm:grid sm:col-span-1 ">
        {isPending ? (
          <Spinner />
        ) : (
          <img
            className="object-cover rounded-full border border-accent-700 md:w-[130px] md:h-[80px]"
            src={`http://localhost:1337${Img}`}
            alt={room.name}
          />
        )}
      </div>
      {/*Room name*/}
      <div className="col-span-2 pl-2 text-xs font-semibold sm:text-base sm:pl-6 font-playfair ">
        {room.name}
      </div>
      {/*Date*/}
      <div className="col-span-3 pl-4 sm:pl-12 ">
        <div className="flex flex-col gap-0 pb-1 text-xs sm:flex-row sm:gap-1 sm:text-base">
          <p>
            {isToday(new Date(dateStart))
              ? "Today"
              : formatDistanceFromNow(dateStart)}{" "}
          </p>
          <span>&rarr;</span>
          <p>{numNight} nights stay</p>
        </div>
        <div className="flex flex-col sm:flex-row text-[11px] sm:text-[13.5px] gap-0 sm:gap-1 text-slate-500">
          <p>{format(new Date(dateStart), "dd MMM yyyy")}</p>
          <span>&mdash;</span>
          <p>{format(new Date(dateEnd), "dd MMM yyyy")}</p>
        </div>
      </div>
      {/*Capacity*/}
      <div className="col-span-2 pl-3 sm:pl-10">
        <div className="text-xs sm:text-base">
          Total: {adults + kids} people
        </div>
        <div className="flex flex-col sm:flex-row text-[11px] sm:text-[13.5px] gap-0 sm:gap-1 text-slate-500">
          <p>Adults: {adults}</p>
          <span>&mdash;</span>
          <p>Kids: {kids}</p>
        </div>
      </div>
      {/*Amount*/}
      <div className="col-span-2 text-center font-jacques ">
        <p
          className={`mx-auto py-[2px] text-[8.5px] sm:text-[15px]  rounded-xl w-8/12 ${status === "Confirmed" ? "bg-green-300 text-green-800" : status === "Operational" ? "bg-yellow-400 text-yellow-800" : status === "Completed" ? "bg-slate-300 text-slate-800" : ""}`}
        >
          {status}
        </p>
      </div>
      <div className="col-span-1 pl-3 text-xs font-semibold text-center sm:text-base sm:pl-0 ">
        {totalPrice}
        <span className="font-playfair">$</span>
      </div>
      <div className="flex xl:col-span-1 col-span-4 xl:mt-0 mt-2 flex-row xl:flex-col gap-2 border-primary-800 w-[100px]">
        {dateStart > today ? (
          <>
            <Link
              to={`${bookingId}`}
              className="flex items-center flex-grow gap-2 px-3 font-bold uppercase transition-colors text-[8px] sm:text-xs group text-accent-700 border-primary-800 hover:text-primary-900"
            >
              <FaEdit className="w-5 h-5 transition-colors text-accent-700 group-hover:text-primary-800" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteBooking bookingId={bookingId} />
          </>
        ) : null}
      </div>
    </li>
  );
}

export default BookingRow;
