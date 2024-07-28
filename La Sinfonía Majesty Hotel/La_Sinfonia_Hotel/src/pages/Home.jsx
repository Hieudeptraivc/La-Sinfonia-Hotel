import ScrollToTop from "../hooks/scrollToTop";
import Facilities from "../ui/Facilities";
import ShowRooms from "../features/rooms/ShowRooms";
import Slider from "../ui/Slider";
import TravelGuide from "../ui/TravelGuide";
function Home() {
  return (
    <div className="min-w-[414px] md:mb-48">
      <ScrollToTop />
      <Slider />
      <ShowRooms />
      <Facilities />
      <TravelGuide />
    </div>
  );
}

export default Home;
