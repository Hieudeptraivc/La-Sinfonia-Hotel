import Logo from "./Logo";

function Footer() {
  return (
    <footer className="z-40  py-8  bg-black min-w-[414px] ">
      <div className="flex justify-start text-white lg:container lg:mx-auto">
        <div className="mx-2 sm:ml-24">
          <Logo maxwidth="32" />
        </div>
        <div className="tracking-[1px] mx-0 sm:mx-6 md:mx-24 lg:mx-32 pl-8 sm:pl-20 font-playfair border-l-2 border-l-white ">
          <span className="font-semibold lg:text-2xl">
            La Sinfonía del Rey Hotel & Spa
          </span>
          <div className="max-w-4xl lg:text-sm text-[12px] font-roboto py-6">
            <p>
              <strong>Address:</strong> No.33-35 Hang Dau Street, Hoan Kiem
              District, Hanoi
              <br />
              <strong>Email:</strong> info@lasinfoniadelreyhotel.com
              <br />
              <strong>Hotline:</strong> (+84) 243 212 1155
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center  text-white text-xs md:text-base text-[10px]">
          Copyright &copy; 2019 La Sinfonía Vietnam.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
