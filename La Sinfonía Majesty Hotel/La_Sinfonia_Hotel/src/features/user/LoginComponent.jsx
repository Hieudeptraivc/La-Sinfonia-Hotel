import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useLogin from "../../authentication/useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginComponent() {
  const { login, isPending } = useLogin();

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    if (!data.email || !data.password) return;

    login(
      { email: data.email, password: data.password },
      {
        onSettled: () => {
          setValue("email", "");
          setValue("password", "");
        },
      }
    );
  };

  return (
    <div className="max-h-[550px]  ">
      <div className="flex flex-col  pb-0 sm:pb-4 rounded-b-xl min-h-[450px] justify-center bg-gray-100 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="py-2 text-xl font-extrabold text-center sm:py-6 sm:text-2xl md:text-3xl text-accent-700">
            Sign in to your Account
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="px-4 py-8 bg-white shadow rounded-b-xl sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Please enter the email address !",
                    })}
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
                {errors?.email && (
                  <p
                    className="pt-2 text-red-500 font-jacques text-end"
                    role="alert"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    {...register("password", {
                      required: "Please enter the password !",
                    })}
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
                {errors?.password && (
                  <p
                    className="pt-2 text-red-500 font-jacques text-end"
                    role="alert"
                  >
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link className="px-1 font-medium text-accent-500 hover:text-accent-700">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-accent-400 group hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
                >
                  {isPending ? <SpinnerMini /> : "Sign in"}
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-500 bg-gray-100">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <div>
                  <Link className="flex items-center justify-center w-full px-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                    <img
                      className="w-5 h-5"
                      src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center justify-center w-full px-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                    <img
                      className="w-5 h-5"
                      src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center justify-center w-full px-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                    <img
                      className="w-6 h-6"
                      src="https://www.svgrepo.com/show/506498/google.svg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
