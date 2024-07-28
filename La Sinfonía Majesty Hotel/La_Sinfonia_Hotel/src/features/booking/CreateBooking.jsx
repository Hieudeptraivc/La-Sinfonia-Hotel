import { useMutation, useQueryClient } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import { differenceInCalendarDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { BsCalendar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { createBooking } from "../../services/apiBooking";
import toast from "react-hot-toast";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCheckAvailable } from "./useCheckAvailable";
import { useState } from "react";
import { checkDateInRange } from "../../utils/helpers";
function CreateBooking({ room }) {
  const queryClient = useQueryClient();
  const { id } = room;
  const { occupancy, price, number } = room.attributes;
  const today = new Date();
  const user = queryClient.getQueryData(["user"]);
  const guestId = user?.id;
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    formState: { errors },
    control,
    getValues,
    reset,
    watch,
    handleSubmit,
  } = useForm();

  const dateStart = getValues("dateStart");
  const dateEnd = getValues("dateEnd");
  const numNight = differenceInCalendarDays(
    new Date(dateEnd),
    new Date(dateStart)
  );

  const totalPrice = price * numNight;
  const { mutate, isPending } = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      toast.success("Your reservation successfully created");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      reset();
      setIsChecked(false);
    },
    onError: (err) => toast.error(err.message),
  });

  const { bookingCheck } = useCheckAvailable(id);
  // function onError(errors) {
  //   // console.log(errors);
  // }
  const onSubmit = (data1) => {
    const newBooking = {
      data: {
        guestId,
        room: id,
        ...data1,
        kids: Number(data1.kids),
        adults: Number(data1.adults),
        numNight,
        totalPrice: price * numNight,
      },
    };

    mutate(newBooking);
  };

  function OnCheck() {
    const isInAnyRange = checkDateInRange(dateStart, dateEnd, bookingCheck);
    if (bookingCheck.length >= number && isInAnyRange) {
      toast.error(
        "Sorry we don't have this room now :( \n Please choose another time."
      );
      reset();
      return;
    }
    toast.success(`This rooms are available`);
    setIsChecked(true);
  }

  return (
    <div className="w-[390px] h-full  px-2 sm:px-4 mx-auto my-4   border-[2px] rounded-xl border-accent-800 ">
      {" "}
      {user !== null && user !== undefined ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full py-2">
              {/*Check In*/}

              <div className="flex items-center justify-between text-left">
                <div className="px-2 text-sm text-black md:text-base lg:text-lg font-jacques">
                  Check In:{" "}
                </div>

                <div className="relative flex items-center justify-end h-full px-2 my-2">
                  <Controller
                    control={control}
                    name="dateStart"
                    rules={{ required: "Please field the check-in date!" }}
                    render={({ field }) => (
                      <>
                        <DatePicker
                          className="w-full h-full px-2 py-2 text-sm font-medium text-yellow-600 md:text-base font-roboto bg-accent-100"
                          placeholderText="Check In"
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                          minDate={today}
                          maxDate={watch("dateEnd")}
                        />
                        <div className="absolute z-0 pr-2 text-yellow-700">
                          <BsCalendar />
                        </div>
                      </>
                    )}
                  />
                </div>
              </div>

              {errors?.dateStart && (
                <p
                  className="pr-2 text-sm text-red-300 md:text-base font-jacques text-end"
                  role="alert"
                >
                  {errors.dateStart.message}
                </p>
              )}
            </div>
            {/*Check Out*/}
            <div>
              <div className="flex items-center justify-between text-left ">
                <div className="px-2 text-sm text-black md:text-base lg:text-lg font-jacques">
                  Check Out:{" "}
                </div>

                <div className="relative flex items-center justify-end h-full px-2 my-2">
                  <Controller
                    rules={{ required: "Please field the check-out date !" }}
                    control={control}
                    name="dateEnd"
                    render={({ field }) => (
                      <>
                        <DatePicker
                          className="w-full h-full px-2 py-2 text-sm font-medium text-yellow-600 md:text-base font-roboto bg-accent-100"
                          placeholderText="Check Out"
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                          minDate={watch("dateStart")}
                        />

                        <div className="absolute z-0 pr-2 text-yellow-700">
                          <BsCalendar />
                        </div>
                      </>
                    )}
                  />
                </div>
              </div>
              {errors?.dateEnd && (
                <p
                  className="pr-2 text-sm text-red-300 md:text-base font-jacques text-end"
                  role="alert"
                >
                  {errors.dateEnd.message}
                </p>
              )}
            </div>

            {/*Adult */}

            <div className="flex items-center justify-between text-left ">
              <div className="px-2 text-sm text-black md:text-base lg:text-lg font-jacques">
                Adults:
              </div>
              <div className="px-2 ">
                <select
                  className="relative flex  text-center  bg-accent-100 font-medium text-sm md:text-base  text-yellow-600 h-full px-2 py-2  my-2 w-[120px] "
                  {...register("adults", {
                    min: 1,
                    max: occupancy.adults,
                    required: true,
                  })}
                  defaultValue={1}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
              </div>
            </div>
            {/*Kid */}

            <div className="flex items-center justify-between text-left ">
              <div className="px-2 text-sm text-black md:text-base lg:text-lg font-jacques">
                Kids:
              </div>
              <div className="px-2 ">
                <select
                  className="relative flex  text-center bg-accent-100  font-medium text-sm md:text-base  text-yellow-600 h-full px-2 py-2  my-2 w-[120px] "
                  {...register("kids", {
                    min: 0,
                    max: occupancy.kids,
                    required: true,
                  })}
                  defaultValue={1}
                >
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                </select>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-left ">
                <div className="px-2 text-sm text-black md:text-base lg:text-lg font-jacques">
                  Your destination:
                </div>
                <div className="px-2">
                  <input
                    className="relative flex w-full h-full px-2 py-2 my-2 text-sm text-left text-yellow-600 md:text-base bg-accent-100 font-jacques "
                    {...register("destination", {
                      required: "This field is required !",
                    })}
                    placeholder="Please give us ur destination"
                  ></input>
                </div>
              </div>
              {errors?.destination && (
                <p
                  className="pr-2 text-sm text-red-300 md:text-base font-jacques text-end"
                  role="alert"
                >
                  {errors.destination.message}
                </p>
              )}
            </div>
          </form>
          <div className="flex items-center justify-between px-1 text-black translate-y-5">
            {isChecked ? (
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={isPending}
                className="w-40 py-2 text-xs font-playfair md:text-sm btn-96"
              >
                {isPending ? (
                  <div className="px-12">
                    <SpinnerMini />
                  </div>
                ) : (
                  "Booking Now"
                )}
              </button>
            ) : (
              <button
                onClick={handleSubmit(OnCheck)}
                className="w-40 py-2 text-xs md:text-sm font-playfair btn-96"
              >
                Check Now
              </button>
            )}
            <div className="pr-6 text-base text-accent-700 md:text-lg">
              <p className="font-playfair">Total price</p>
              <p className="text-xl font-semibold md:text-2xl ">
                ${totalPrice ? totalPrice : price}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="items-center py-4 bg-ac">
          <p className="pt-12 text-xl font-semibold tracking-widest font-jacques text-accent-700">
            Please log in before booking a room.{" "}
          </p>
          <Link
            to="/login"
            className="w-32 mx-auto mt-6 border-accent-500 hover:bg-accent-700 text-accent-700 btn-96"
          >
            {" "}
            Login now{" "}
          </Link>
        </div>
      )}
    </div>
  );
}

export default CreateBooking;
