import { useForm } from "react-hook-form";
import { useUser } from "../../authentication/useUser";
import { useUpdateUser } from "../../authentication/useUpdateUser";
import SpinnerMini from "../../ui/SpinnerMini";
import Spinner from "../../ui/Spinner";

function ProfileUser({ setIsUpdate }) {
  const { user, isPending } = useUser();

  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    handleSubmit,
  } = useForm();
  const { updateUser, isUpdating } = useUpdateUser(setIsUpdate);
  const onSubmit = (data) => {
    const updatedUser = {
      password: data.password,
      passwordConfirmation: data.confirmPassword,
      currentPassword: data.currentPassword,
    };
    updateUser(updatedUser, {
      onSettled: () => {
        setValue("password", "");
        setValue("confirmPassword", "");
        setValue("currentPassword", "");
      },
    });
  };
  if (isPending)
    return (
      <div className="z-20 relative flex h-screen lg:[600px] items-center justify-center  bg-black">
        <Spinner />;
      </div>
    );
  return (
    <div className="md:h-[550px] max-h-[550px]  md:mt-0 w-[414px] md:w-[550px]   ">
      <div className=" w-11/12 mx-auto sm:w-full h-full border-[2px]  rounded-xl border-accent-500 min-h-[550px] bg-gray-100">
        <div className="mx-auto ">
          <div className="flex justify-center px-2 ">
            <div className="flex flex-col w-full">
              <h3 className="py-1 text-xl font-extrabold text-center uppercase sm:text-2xl lg:text-3xl text-accent-700 ">
                Your profile
              </h3>
              <div className="flex flex-col mb-2 bg-white shadow md:w-full sm:rounded-xl">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="px-10 pt-8 pb-2 bg-white rounded-lg "
                >
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block pb-1 text-sm font-medium text-gray-700 ">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.firstName}
                        disabled={true}
                        placeholder="Enter your first name"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-900 placeholder-gray-500 border border-gray-300 rounded shadow appearance-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:shadow-outline"
                      />
                      {errors?.firstName && (
                        <p
                          className="pt-2 text-base text-red-500 font-jacques text-end"
                          role="alert"
                        >
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="md:ml-2">
                      <label className="block pb-1 text-sm font-medium text-gray-700 ">
                        Last Name
                      </label>
                      <input
                        type="text"
                        disabled={true}
                        defaultValue={user?.lastName}
                        placeholder="Enter your last name"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-900 placeholder-gray-500 border border-gray-300 rounded shadow appearance-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:shadow-outline"
                      />
                      {errors?.lastName && (
                        <p
                          className="pt-2 text-base text-red-500 font-jacques text-end"
                          role="alert"
                        >
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block pb-1 text-sm font-medium text-gray-700 ">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      disabled={true}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-900 placeholder-gray-500 border rounded shadow appearance-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:shadow-outline"
                    />
                    {errors?.email && (
                      <p
                        className="pt-2 text-red-500 font-jacques text-end"
                        role="alert"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block pb-1 text-sm font-medium text-gray-700 ">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={0 + user?.phone}
                        disabled={true}
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-900 placeholder-gray-500 border rounded shadow appearance-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:shadow-outline"
                      />
                      {errors?.phone && (
                        <p
                          className="pt-2 text-red-500 font-jacques text-end"
                          role="alert"
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="md:ml-2">
                      <label className="block pb-1 text-sm font-medium text-gray-700 ">
                        Current Password
                      </label>
                      <input
                        type="password"
                        {...register("currentPassword", {
                          required: "Please enter the new password !",
                          minLength: {
                            value: 8,
                            message: "Password needs a minimum of 8 characters",
                          },
                        })}
                        placeholder="Current password "
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-900 placeholder-gray-500 border border-gray-300 rounded shadow appearance-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:shadow-outline"
                      />
                      {errors?.phone && (
                        <p
                          className="pt-2 text-red-500 font-jacques text-end"
                          role="alert"
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block pb-1 text-sm font-medium text-gray-700 ">
                        New Password
                      </label>
                      <input
                        type="password"
                        {...register("password", {
                          required: "Please enter the new password !",
                          minLength: {
                            value: 8,
                            message: "Password needs a minimum of 8 characters",
                          },
                        })}
                        placeholder="New password "
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-900 placeholder-gray-500 border border-gray-300 rounded shadow appearance-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:shadow-outline"
                      />
                      {errors?.password && (
                        <p
                          className="pt-2 text-base text-red-500 font-jacques text-end"
                          role="alert"
                        >
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                    <div className="md:ml-2">
                      <label className="block pb-1 text-sm font-medium text-gray-700 ">
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-900 placeholder-gray-500 border border-gray-300 rounded shadow appearance-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:shadow-outline"
                        type="password"
                        {...register("confirmPassword", {
                          required: "This field is required",
                          validate: (value) =>
                            value === getValues().password ||
                            "Passwords need to match",
                        })}
                        placeholder="Confirm new password "
                      />
                      {errors?.passwordConfirm && (
                        <p
                          className="pt-2 text-base text-red-500 font-jacques text-end"
                          role="alert"
                        >
                          {errors.passwordConfirm.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-center ">
                    <button
                      type="submit"
                      disabled={isUpdating}
                      className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-accent-400 group hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
                    >
                      {isUpdating ? <SpinnerMini /> : " Update Account"}
                    </button>
                  </div>
                </form>
                <div className="px-10 py-2 text-end">
                  <button
                    onClick={() => (setIsUpdate(false), window.scrollTo(0, 5))}
                    className="w-3/12 py-2 text-sm font-medium text-center text-white bg-red-500 border border-transparent rounded-md sm:w-2/12 group hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
