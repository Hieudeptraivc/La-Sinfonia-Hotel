import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBooking";

export function useBooking() {
  const { id: bookingId } = useParams();
  const { isPending, data, isError } = useQuery({
    queryKey: ["booking", Number(bookingId)],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  const booking = data?.data.attributes;

  return { isPending, isError, booking };
}
