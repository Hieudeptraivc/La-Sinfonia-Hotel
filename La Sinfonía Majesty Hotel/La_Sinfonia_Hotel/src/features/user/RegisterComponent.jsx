import { useForm } from "react-hook-form";
import { useSignUp } from "../../authentication/useSignUp";

function RegisterComponent({ setIsOpen }) {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();
  const { signup, isPending } = useSignUp(setIsOpen);

  const onSubmit = (data) => {
    const newGuest = {
      username: data.lastName + " " + data.firstName,
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
    };
    signup(newGuest, {
      onSettled: () => reset(),
    });
  };
  return (
    <div className="max-h-[550px] ">
      <div className="w-full h-full rounded-b-xl min-h-[550px] bg-gray-100">
        <div className="mx-auto">
          <div className="flex justify-center px-2 pb-4 ">
            <div className="flex flex-col w-full md:w-11/12">
              <h3 className="py-2 text-xl font-extrabold text-center sm:py-6 sm:text-2xl md:text-3xl text-accent-700">
                Create an Account!
              </h3>
              <div className="bg-white shadow md:w-full sm:rounded-xl">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="px-10 pt-8 bg-white rounded-lg "
                >
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block pb-1 text-sm font-medium text-gray-700 ">
                        First Name
                      </label>
                      <input
                        type="text"
                        {...register("firstName", {
                          required: "Please enter the first name !",
                        })}
                        placeholder="Enter your first name"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-900 placeholder-gray-500 border border-gray-300 rounded shadow appearance-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:shadow-outline"
                      />
                      {errors?.firstName && (
                        <p
                          className="pt-2 text-red-500 font-jacques text-end"
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
                        {...register("lastName", {
                          required: "Please enter the last name !",
                        })}
                        placeholder="Enter your last name"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-900 placeholder-gray-500 border border-gray-300 rounded shadow appearance-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:shadow-outline"
                      />
                      {errors?.lastName && (
                        <p
                          className="pt-2 text-red-500 font-jacques text-end"
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
                      {...register("email", {
                        required: "Please enter the email address !",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please provide a valid email address",
                        },
                      })}
                      placeholder="Enter your email address"
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
                  <div className="mb-4">
                    <label className="block pb-1 text-sm font-medium text-gray-700 ">
                      Phone
                    </label>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Please enter the phone number !",
                        maxLength: {
                          value: 13,
                          message: "Password needs a maximum of 13 characters",
                        },
                      })}
                      placeholder="Enter your phone address"
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
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block pb-1 text-sm font-medium text-gray-700 ">
                        Password
                      </label>
                      <input
                        type="password"
                        {...register("password", {
                          required: "Please enter the password !",
                          minLength: {
                            value: 8,
                            message: "Password needs a minimum of 8 characters",
                          },
                        })}
                        placeholder="******************"
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-900 placeholder-gray-500 border border-gray-300 rounded shadow appearance-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 focus:outline-none focus:shadow-outline"
                      />
                      {errors?.password && (
                        <p
                          className="pt-2 text-red-500 font-jacques text-end"
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
                        {...register("passwordConfirm", {
                          required: "This field is required",
                          validate: (value) =>
                            value === getValues().password ||
                            "Passwords need to match",
                        })}
                        placeholder="******************"
                      />
                      {errors?.passwordConfirm && (
                        <p
                          className="pt-2 text-red-500 font-jacques text-end"
                          role="alert"
                        >
                          {errors.passwordConfirm.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-2 text-center">
                    <button
                      type="submit"
                      disabled={isPending}
                      className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-accent-400 group hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-2 border-t" />
                </form>
                <div className="pb-2 text-center">
                  <button
                    onClick={() => (setIsOpen(true), window.scroll(0, 5))}
                    className="px-1 text-[14px] font-medium text-accent-500 hover:text-accent-700"
                  >
                    Already have an account? Login!
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

export default RegisterComponent;
