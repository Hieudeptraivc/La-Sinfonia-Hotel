import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";

function useRooms() {
  const {
    data: rooms,
    isPending,

    isError,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  return { rooms, isPending, isError };
}

export default useRooms;
