import { memo } from "react";
import toast from "react-hot-toast";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";
import { useBookingsByUserId } from "./useBookings";

function BookingsTable() {
  const { bookings, isPending, isError, count } = useBookingsByUserId();

  if (isPending) return <Spinner />;

  if (isError) {
    toast.error("Something is wrong, cannot get data from server");
    return null;
  }

  if (!bookings.length) {
    return (
      <div className="mx-auto my-10 text-sm text-center text-accent-800 sm:my-20 font-playfair sm:text-xl lg:text-2xl">
        No bookings could be found!
      </div>
    );
  }

  // Render bookings table
  return (
    <div className="flex flex-col w-11/12 mx-auto mb-20 border-2 sm:w-10/12 border-accent-700 bg-accent-100">
      <div className="grid items-center w-full grid-cols-11 py-1 text-xs font-bold text-center text-white uppercase sm:text-base md:py-8 sm:grid-cols-12 font-playfair bg-accent-700">
        <div className="hidden sm:grid sm:col-span-1">Room</div>
        <div className="col-span-2">Room name</div>
        <div className="col-span-3">Dates</div>
        <div className="col-span-2">Capacity</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-1">Amount</div>
        <div className="col-span-1"></div>
      </div>
      <ul className="flex flex-col w-full mx-auto">
        {bookings.map((booking) => (
          <MemoizedBookingRow key={booking.id} booking={booking} />
        ))}
      </ul>
      <div className="bg-accent-700">
        <Pagination count={count} />
      </div>
    </div>
  );
}

const MemoizedBookingRow = memo(BookingRow);

export default BookingsTable;
