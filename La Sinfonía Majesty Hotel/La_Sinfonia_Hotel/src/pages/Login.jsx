import { useState } from "react";
import login from "../assets/login.jpg";
import LoginComponent from "../features/user/LoginComponent";
import RegisterComponent from "../features/user/RegisterComponent";

import ScrollToTop from "../hooks/scrollToTop";
import { useUser } from "../authentication/useUser";
import Spinner from "../ui/Spinner";
import ProfileUser from "../features/user/ProfileUser";

function Login() {
  const [isOpen, setIsOpen] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const { user, isPending } = useUser();
  if (isPending)
    return (
      <div className="z-20 relative flex h-screen lg:[600px] items-center justify-center  bg-black">
        <Spinner />;
      </div>
    );

  return (
    <div className="w-full min-w-[414px] ">
      <ScrollToTop />
      <div
        className={` z-20 relative flex  ${isUpdate ? "md:h-[950px] sm:h-[1200px] h-[1160px]" : "  "} ${!isOpen ? "h-[1300px] md:h-[1150px]" : "h-[1050px]"}  flex-col items-center  bg-yellow-300`}
      >
        <div className="z-20 flex flex-col items-center mt-48 text-center text-white lg:pt-0 ">
          <div
            className={`${user?.username ? `pb-0 ` : "pb-12"} text-xl sm:text-2xl lg:text-4xl`}
          >
            <p className="font-semibold font-playfair">
              {user?.username ? `Welcome, ${user.username}` : "Login"}
            </p>
            <p className="pt-6 text-base lg:text-2xl sm:text-xl font-jacques">
              Start to experience luxury redefined
            </p>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full">
          <img
            className="object-cover w-full h-full"
            src={login}
            alt={`La sifonia ${login}`}
          ></img>
        </div>
        {user?.username ? (
          <div className={`z-30 antialiased ${isUpdate ? "mt-12" : "mt-0"} `}>
            {!isUpdate ? (
              <button
                className="mx-auto my-8 text-xs bg-transparent shadow-sm md:text-base btn-38"
                onClick={() => setIsUpdate(true)}
              >
                <div className=" old">
                  <span>Updated your profile</span>
                  <span>Updated your profile</span>
                </div>
                <div className="text-white new">
                  <span>Updated your password</span>
                </div>
              </button>
            ) : (
              <ProfileUser setIsUpdate={setIsUpdate} />
            )}
          </div>
        ) : (
          <div className="z-30 w-[200px] rounded-xl md:w-[600px] px-4 h-[700px] md:h-[500px] min-w-[414px] antialiased   ">
            <div className="flex bg-white border-b-2 rounded-t-xl ">
              <button
                onClick={() => setIsOpen(true)}
                className={`py-4 border-r-2 ${isOpen ? "bg-accent-500  text-white" : ""} rounded-t-xl font-playfair text-base md:text-xl font-semibold uppercase w-[207px] md:w-[300px]`}
              >
                Login
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={`py-4 ${!isOpen ? "bg-accent-500   text-white" : ""} font-playfair text-base md:text-xl rounded-t-xl font-semibold uppercase w-[207px] md:w-[300px]`}
              >
                Register
              </button>
            </div>

            {isOpen && <LoginComponent />}
            {!isOpen && <RegisterComponent setIsOpen={setIsOpen} />}
          </div>
        )}

        <div className="absolute w-full h-full bg-black/80"></div>
      </div>
    </div>
  );
}

export default Login;
