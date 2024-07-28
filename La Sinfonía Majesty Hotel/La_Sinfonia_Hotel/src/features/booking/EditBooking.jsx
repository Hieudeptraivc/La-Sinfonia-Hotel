import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import { useBooking } from "../booking/useBooking";
import { Link, useParams } from "react-router-dom";
import { formatDistanceFromNow, getDateWithoutTime } from "../../utils/helpers";
import { GiHouse } from "react-icons/gi";
import { format, isToday } from "date-fns";
import { BsPeople } from "react-icons/bs";
import { motion } from "framer-motion";
import { CiEdit } from "react-icons/ci";
import { IoManOutline, IoCheckmarkCircleSharp } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import { TbMoodKid } from "react-icons/tb";

import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { useState } from "react";
import { useEditBooking } from "./useEditBooking";
import { useForm } from "react-hook-form";

function EditBooking() {
  const [isEdit, setIsEdit] = useState(false);
  const [isEditOpacancy, setIsEditOpacancy] = useState(false);

  const { isEditing, editBooking } = useEditBooking();
  const { isPending, booking, isError } = useBooking();
  const { id } = useParams();
  const today = getDateWithoutTime();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (isPending) return <Spinner />;

  if (isError)
    return toast.error("Something is wrong, can get data from server");
  if (!booking) return <p>No booking could be found</p>;
  const {
    destination,
    adults,
    kids,
    createdAt,
    dateEnd,
    dateStart,
    numNight,
    totalPrice,
    guestId,
    room,
  } = booking;

  const roomName = room?.data.attributes.name;
  const guest = guestId?.data.attributes;

  const status =
    dateStart > today
      ? "Confirmed"
      : dateStart <= today && today <= dateEnd
        ? "Operational"
        : dateEnd < today
          ? "Completed"
          : "";

  const onSubmit = (data) => {
    console.log(data);
    if (!data.newDestination) {
      const updateBooking = {
        data: {
          adults: data.adults,
          kids: data.kids,
        },
      };
      editBooking({ edit: updateBooking, id });
    } else if (!data.adults || !data.kids) {
      const updateBooking = {
        data: {
          destination: data.newDestination,
        },
      };
      editBooking({ edit: updateBooking, id });
    } else if (data.newDestination && data.adults && data.kids) {
      const updateBooking = {
        data: {
          destination: data.newDestination,
          adults: data.adults,
          kids: data.kids,
        },
      };
      editBooking({ edit: updateBooking, id });
    }
    setIsEditOpacancy(false);
    setIsEdit(false);
  };

  return (
    <motion.div
      initial={{ y: 220, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: 40 },
        opacity: { duration: 1 },
        ease: "backIn",

        duration: 1,
      }}
      className=""
    >
      <div className="flex items-center justify-between mx-6 my-8 md:mx-20 font-roboto ">
        <div className="flex flex-col items-start justify-start gap-1 md:items-center md:gap-12 md:flex-row">
          <p className="text-xl font-bold uppercase md:text-2xl">
            Booking #{id}
          </p>
          <p
            className={` px-2 py-1 font-jacques text-base font-semibold rounded-xl  ${status === "Confirmed" ? "bg-green-300 text-green-800" : status === "Operational" ? "bg-yellow-400 text-yellow-800" : status === "Completed" ? "bg-slate-300 text-slate-800" : ""}`}
          >
            {status}
          </p>
        </div>
        <Link
          className="font-semibold text-accent-600 hover:text-accent-800"
          to={-1}
        >
          &larr; Back
        </Link>
      </div>

      <div className="flex flex-col w-11/12 mx-auto rounded-sm font-roboto border-1 border-accent-600">
        <div className="flex flex-col items-center justify-between w-full gap-2 px-2 py-4 text-white md:px-6 md:flex-row bg-accent-700">
          <div className="flex items-center ">
            <GiHouse className="text-xl" />
            <p className="pl-2 font-semibold">
              {numNight} nights in {roomName}{" "}
            </p>
          </div>
          <p>
            {format(new Date(dateStart), "EEE, MMM dd yyyy")} (
            {isToday(new Date(dateStart))
              ? "Today"
              : formatDistanceFromNow(dateStart)}
            ) &mdash; {format(new Date(dateEnd), "EEE, MMM dd yyyy")}
          </p>
        </div>
        {isEditing ? (
          <Spinner />
        ) : (
          <div className="px-6 bg-accent-100">
            <div className="flex flex-wrap items-center gap-6 py-4 xl:flex-row">
              <div className="flex items-center gap-1">
                <BsPeople className="text-xl" />
                <div className="flex items-center gap-1 ">
                  <span className="font-semibold">Customer name: </span>
                  <p> {guest?.username}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 ">
                  <span className="font-semibold">Opacancy: </span>
                  {!isEditOpacancy ? (
                    <>
                      <p>
                        {" "}
                        {adults} adults {kids ? ` & ${kids} kids` : ""}
                      </p>
                      <button
                        onClick={() => setIsEditOpacancy(true)}
                        className=" hover:text-black text-accent-700"
                      >
                        <CiEdit className="text-[18px]" />
                      </button>
                    </>
                  ) : (
                    <div className="flex w-full h-8 gap-2 ">
                      <form
                        className="flex items-center w-full gap-2 "
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <IoManOutline className="text-6xl" />
                        <select
                          {...register("adults", {
                            min: 1,
                            max: 2,
                            required: true,
                          })}
                          defaultValue={adults}
                          className="w-full bg-accent-50"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                        </select>

                        <TbMoodKid className="text-6xl" />
                        <select
                          {...register("kids", {
                            min: 0,
                            max: 1,
                            required: true,
                          })}
                          defaultValue={kids}
                          className="w-full bg-accent-50"
                        >
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                        </select>
                        <button
                          onClick={handleSubmit(onSubmit)}
                          className="hover:text-black text-end text-accent-700 text-[20px]"
                        >
                          <IoCheckmarkCircleSharp />
                        </button>
                      </form>
                      <button
                        onClick={() => setIsEditOpacancy(false)}
                        className="hover:text-black text-end text-accent-700 text-[16px]"
                      >
                        <ImCancelCircle />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>&bull;</span>
                <p>{guest?.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <span>&bull;</span>
                <p>0{guest?.phone}</p>
              </div>
            </div>

            {destination && (
              <div
                className={`flex items-center gap-1  py-4 ${isEdit ? " w-full" : ""}`}
              >
                <HiOutlineChatBubbleBottomCenterText className="text-xl" />
                <div className="flex items-center w-full gap-1">
                  <span className="font-semibold">Destination:</span>
                  {!isEdit ? (
                    <>
                      <p>{destination}</p>
                      <button
                        onClick={() => setIsEdit(true)}
                        className=" hover:text-black text-accent-700"
                      >
                        <CiEdit className="text-[18px]" />
                      </button>
                    </>
                  ) : (
                    <div className="flex w-full h-8 gap-2 ">
                      <form
                        className="flex w-full py-1 "
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="w-full">
                          <input
                            defaultValue={destination}
                            {...register("newDestination", {
                              required:
                                "Please give us your destination or something you want us services!",
                            })}
                            className="w-full bg-accent-50"
                          ></input>
                          {errors?.newDestination && (
                            <p className="py-1 text-red-500 font-jacques text-end">
                              {errors.newDestination.message}
                            </p>
                          )}
                        </div>
                      </form>
                      <button
                        onClick={() => setIsEdit(false)}
                        className="hover:text-black text-end text-accent-700 text-[16px]"
                      >
                        <ImCancelCircle />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="flex items-center justify-between w-11/12 px-4 py-4 mx-auto my-2 rounded-md bg-accent-400 text-accent-900">
              <div className="flex items-center gap-1">
                <HiOutlineCurrencyDollar className="text-xl" />
                <p className="font-semibold">Total price:</p>
                <p>
                  <span className="pl-2 font-playfair">$</span>
                  {totalPrice}
                </p>
              </div>
              <div className="font-semibold uppercase">paid</div>
            </div>

            <div className="text-[14.5px] py-2 text-primary-500 text-end">
              <p>Booked {format(new Date(createdAt), "EEE, MMM dd yyyy, p")}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default EditBooking;
