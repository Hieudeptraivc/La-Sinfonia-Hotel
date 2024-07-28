import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
function Logo({ maxwidth = "24", nav, header, onClick = null }) {
  return (
    <Link to="/">
      <img
        className={`max-w-${maxwidth} bg-black ${header ? "pt-0" : " bg-transparent transition-all duration-100"} rounded-b-[49px] min-w-32 h-32 w-auto mx-auto ${nav ? "h-38 min-h-32  " : ""} sm:mx-0 pt-1 sm:h-36 sm:max-h-[180px] duration-300 transition-all`}
        src={logo}
        alt="Logo La Sinfiona"
        onClick={onClick}
      />
    </Link>
  );
}

export default Logo;
