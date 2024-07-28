import { useQuery } from "@tanstack/react-query";
import { getRoom } from "../../services/apiRoom";
export function useRoom(id) {
  const {
    data: room,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["room-id", id],
    queryFn: () => getRoom(id),
  });

  return { room, isPending, isError };
}
