import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
import { getBookingsByRoom } from "../../services/apiBooking";

export function useCheckAvailable(roomId,dateStart) {
  const {
    isPending,
    data: bookingCheck,
    isError,
  } = useQuery({
    queryKey: ["bookings", Number(roomId)],
    queryFn: () => getBookingsByRoom({ roomId,dateStart }),
  });

  const bookingList = bookingCheck?.data.map((booking) => ({
    dateStart: booking.attributes.dateStart,
    dateEnd: booking.attributes.dateEnd,
  }));

  return { isPending, isError, bookingCheck: bookingList };
}
