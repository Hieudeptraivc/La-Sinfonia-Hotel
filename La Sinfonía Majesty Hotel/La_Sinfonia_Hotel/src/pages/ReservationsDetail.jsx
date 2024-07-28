import img from "../assets/reservations.jpg";
import ScrollToTop from "../hooks/scrollToTop";
import EditBooking from "../features/booking/EditBooking";

function ReservationsDetail() {
  return (
    <div className="flex flex-col min-w-[414px] antialiased">
      <ScrollToTop />
      <div className=" z-20 relative flex h-[450px] lg:[550px] items-center justify-center   bg-yellow-300">
        <div className="z-20 flex flex-col items-center text-center text-white lg:pt-0 lg:pb-6 ">
          <div className=" font-playfair">
            <p className="text-xl font-semibold sm:text-2xl lg:text-4xl ">
              Booking Details
            </p>
            <p className="pt-6 sm:text-base lg:text-xl ">
              More information about your booking
            </p>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full">
          <img
            className="object-cover w-full h-full"
            src={img}
            alt={`La sifonia ${img}`}
          ></img>
        </div>
        <div className="absolute w-full h-full bg-black/50"></div>
      </div>
      <div className=" h-[700px] md:h-[400px] ">
        <div className="absolute left-0 right-0 z-30 h-full mx-auto bg-white min-w-[414px] w-10/12 top-80 ">
          <EditBooking />
        </div>
      </div>
    </div>
  );
}

export default ReservationsDetail;
