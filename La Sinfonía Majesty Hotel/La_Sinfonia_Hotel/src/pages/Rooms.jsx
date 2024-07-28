import ShowList from "../features/rooms/ShowList";
import ScrollToTop from "../hooks/scrollToTop";
import Facilities from "../ui/Facilities";
import PageHeader from "../ui/PageHeader";
import TravelGuide from "../ui/TravelGuide";

function Rooms() {
  return (
    <div className="min-w-[414px] md:mb-48 ">
      <ScrollToTop />
      <PageHeader />
      <ShowList />
      <Facilities />
      <TravelGuide />
    </div>
  );
}

export default Rooms;
