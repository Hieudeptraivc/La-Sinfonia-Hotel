import img from "../assets/img/about.jpg";
import img1 from "../assets/img/about1.jpg";
import ScrollToTop from "../hooks/scrollToTop";

function About() {
  return (
    <div className="flex flex-col min-w-[414px] antialiased">
      <ScrollToTop />
      <div className=" z-20 relative flex h-[370px] sm:h-[450px] items-center justify-center   bg-yellow-300">
        <div className="z-20 flex flex-col items-center pt-6 text-center text-white xl:pt-16 lg:pt-0 lg:pb-6 ">
          <div className="text-xl lg:text-3xl font-playfair">
            <p className="font-semibold ">
              About La Sinfonía Hotels & Resorts Vietnam
            </p>
            <p className="my-2 text-xs tracking-widest md:my-5 sm:text-xs lg:text-xl">
              Experience luxury redefined
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
      <div className=" h-[1100px]  md:h-[1200px] ">
        <div className="absolute left-0 right-0 z-40 h-full mx-auto bg-white min-w-[414px] w-10/12 top-80 ">
          <div className="pt-6 text-xl font-bold text-center md:pt-12 lg:text-4xl font-playfair">
            La Sinfonía Hotels & Resorts Vietnam
          </div>
          <div className="max-w-[900px] mx-auto py-6">
            <img
              src={img1}
              alt={`La Sifonia ${img1}`}
              className="object-cover w-11/12 h-full mx-auto md:w-full"
            />
          </div>

          <div className="mx-8 text-base text-center sm:text-lg md:text-xl md:text-left md:mx-0 font-extralight">
            <p className="py-2">
              There is no denying that the worldwide travel industry has been
              rapidly changing over the years, which means hospitality
              businesses are facing many opportunities and threats, and must
              always have great foresight and flexibility to succeed globally.
              For more than 4 years since its establishment, La Sinfonía Hotels
              & Resorts Vietnam has continuously exceeded its own boundaries and
              <span className="font-bold"> redefined luxury boutiques </span> in
              the city by
              <span className="font-bold">
                {" "}
                constantly improving our service quality
              </span>
              <span className="font-bold">
                {" "}
                nurturing creative concepts{" "}
              </span>{" "}
              and to be well-adapted to our guests’ ever-changing demands.
            </p>{" "}
            <p className="py-2">
              Located in the most unbeatable areas of the capital, the boutique
              hotel chain of La Sinfonía Hotels & Resorts Vietnam has conquered
              the hearts of not only domestic but also international visitors
              when coming to Hanoi. With an aspiration of becoming one of the
              leaders in the hospitality industry in The Old Quarter,
              particularly in the luxury segment, La Sinfonía Hotels & Resorts
              Vietnam always focuses on
              <span className="font-bold">
                {" "}
                creating exceptional relaxing experiences
              </span>{" "}
              that are manifested in our exquisite hotel features, charming
              staff, and
              <span className="font-bold"> personalized services</span> that
              significantly engage meaningful interactions with our guests.
            </p>
            <p className="py-2">
              So far, La Sinfonía Hotels & Resorts Vietnam has proudly provided
              hospitality services to millions of customers and in the time to
              come, we hope to spread our passion and affection for hospitality
              to even more travel enthusiasts all around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
