import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBooking";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constant";

export function useBookingsByUserId() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const user = queryClient.getQueryData(["user"]);
  const userId = user?.id;
  const today = new Date().toISOString();
  //Filter
  const filterValue = searchParams.get("status");
  const filterCondition =
    !filterValue || filterValue === "all" ? null : filterValue;
  const filter =
    filterCondition === "confirmed"
      ? `filters[dateStart][$gt]=${today}`
      : filterCondition === "operations"
        ? `filters[dateStart][$lte]=${today}&filters[dateEnd][$gte]=${today}`
        : filterCondition === "completed"
          ? `filters[dateEnd][$lt]=${today}`
          : null;
  //Sort
  const sortByRaw = searchParams.get("sortBy") || "dateStart-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  //Query
  const {
    data: { data: bookings, meta } = {},
    isPending,
    isError,
  } = useQuery({
    queryKey: ["bookings", filterCondition, sortBy, page],
    queryFn: () => getBookings({ userId, filter, sortBy, page }),
    enabled: !!userId,
    gcTime: Infinity,
  });
  const count = meta?.pagination.total;
  // console.log("Bookings", bookings, isPending, isFetching);

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterCondition, sortBy, page + 1],
      queryFn: () => getBookings({ userId, filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterCondition, sortBy, page - 1],
      queryFn: () => getBookings({ userId, filter, sortBy, page: page - 1 }),
    });

  return { isPending, isError, bookings, count };
}
