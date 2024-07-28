import { Link } from "react-router-dom";

function BookButton({ id }) {
  return (
    <Link
      to={`/rooms/${id}`}
      className="rounded-md sm:max-h-12 max-h-10 max-w-44 text-[11px] sm:text-[13px] sm:max-w-48 btn-38 "
    >
      <div className="old ">
        <span>Room Details</span>
        <span>Room Details</span>
      </div>
      <div className="new">
        <span> Explore Now</span>
      </div>
    </Link>
  );
}

export default BookButton;
