import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function Header() {
  const queryClient = useQueryClient();
  const [nav, setNav] = useState(false);
  const [user, setUser] = useState(null);
  const handleNav = () => {
    setNav(!nav);
  };
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const userData = queryClient.getQueryData(["user"]);
    setUser(userData);

    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (event.query.queryKey[0] === "user") {
        setUser(event.query.state.data);
      }
    });

    return () => unsubscribe();
  }, [queryClient]);

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${header ? "bg-black py-0 max-h-28 sm:py-4 shadow-lg" : "bg-transparent  md:py-6"} fixed z-50 w-full transition-all duration-300`}
    >
      <div
        className={` flex-col items-center hidden  max-h-28 md:flex gap-y-4 md:justify-between md:flex-row xl:gap-y-0 px-2 xl:px-16`}
      >
        <Logo header={header} />
        <div className={`text-end ${user && header ? "pb-3" : ""} `}>
          {user ? (
            <div className="pb-2 text-base tracking-widest text-accent-300 font-playfair ">
              <span className="">Welcome, </span>
              <Link
                to="/login"
                className="hover:text-primary-200 hover:border-b border: border-primary-200"
              >{`${user.username}`}</Link>
            </div>
          ) : (
            ""
          )}
          <NavBar header={header} />
        </div>
      </div>
      <div className="flex items-center justify-between px-4 pt-2 md:hidden">
        <Logo header={header} />
        <div onClick={handleNav} className="block text-white">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-black bg-[#000000] px-6 ease-in-out duration-500"
            : "fixed top-0 left-[-100%]"
        }
      >
        <Logo header={header} onClick={handleNav} nav={nav} />
        {user ? (
          <div className="pb-2 text-base tracking-widest text-accent-300 font-playfair ">
            <span className="">Welcome, </span>
            <Link
              onClick={handleNav}
              to="/login"
              className="hover:text-primary-200 hover:border-b border: border-primary-200"
            >{`${user.username}`}</Link>
          </div>
        ) : (
          ""
        )}
        <NavBar header={header} onClick={handleNav} nav={nav} />
      </div>
    </header>
  );
}

export default Header;
