import LinkButton from "./LinkButton";

import { useQueryClient } from "@tanstack/react-query";
import Logout from "./Logout";

function NavBar({ header, nav = false, onClick }) {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]);

  return (
    <ul
      className={` md:flex ${header ? "lg:mb-4" : "lg:mb-12"}  ${nav ? `flex-col gap-y-4 flex max-w-[100px] ${user ? " " : "mt-6"} ` : " hidden items-center "} mb-0 md:pb-2  text-white gap-x-4 tracking-[3px]  lg:gap-x-8 font-jacques `}
    >
      <LinkButton onClick={onClick} nav={nav} to="/">
        Home
      </LinkButton>
      <LinkButton onClick={onClick} nav={nav} to="/rooms">
        Rooms
      </LinkButton>
      <LinkButton onClick={onClick} nav={nav} to="/about">
        About
      </LinkButton>
      <LinkButton onClick={onClick} nav={nav} to="/reservations">
        Reservation
      </LinkButton>
      {user ? (
        <Logout />
      ) : (
        <LinkButton onClick={onClick} nav={nav} to="/login">
          Login
        </LinkButton>
      )}
      {}
    </ul>
  );
}

export default NavBar;
