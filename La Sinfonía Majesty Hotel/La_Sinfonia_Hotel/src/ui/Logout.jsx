import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/helpers";
import LinkButton from "./LinkButton";
import { useQueryClient } from "@tanstack/react-query";

function Logout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handleLogout = () => {
    removeToken();
    queryClient.setQueryData(["user"], null);
    queryClient.setQueryData(["bookings"], null);
    navigate("/login", { replace: true });
  };

  return <LinkButton onClick={handleLogout}>Logout</LinkButton>;
}

export default Logout;
