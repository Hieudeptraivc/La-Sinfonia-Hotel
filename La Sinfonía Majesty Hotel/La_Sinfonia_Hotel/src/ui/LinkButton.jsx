import { Link } from "react-router-dom";

function LinkButton({ onClick, children, to = null }) {
  return (
    <li>
      <Link
        onClick={onClick}
        to={to}
        className="text-sm uppercase font-playfair transition lg:text-[18px] hover:text-yellow-500"
      >
        {children}
      </Link>
    </li>
  );
}

export default LinkButton;
