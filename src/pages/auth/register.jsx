import { useEffect, useState } from "react";
import logoGogle from "../../assets/google.svg";
import logoFacebook from "../../assets/facebookLogo.svg";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import gamberRegis from "../../assets/tanganDompet.svg";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { registerThunk } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, name, password, cpassword } = data;

    if (password !== cpassword) {
      setError("cpassword", {
        type: "manual",
        message: "Password do not match",
      });

      return;
    }

    const newUser = { email, name, password };

    dispatch(
      registerThunk({
        data: newUser,
        next: (message) => {
          toast.success(message);
          navigate("/auth/login");
        },
      }),
    );
  };

  useEffect(() => {
    if (auth.isRejected) {
      console.log(auth);
      setError("email", {
        type: "manual",
        message: auth.error,
      });

      return;
    }
  }, [auth, setError]);

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="py-6 px-5 flex justify-center items-center">
        <section className="w-full max-w-md flex flex-col gap-4">
          <div className="flex items-center">
            <div className="h-10 w-10">
              <img
                src="/LOGO.png"
                alt="logo-apps"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-2xl font-semibold text-primary">E-Wallet</div>
          </div>

          <div className="font-semibold text-[19px]">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </div>

          <div className="text-[12.5px] text-dark-gray">
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </div>

          <div className="flex flex-row lg:flex-col gap-3 w-full">
            <button
              type="button"
              className="cursor-pointer border border-dark-gray/30 rounded-3xl h-12 flex-1 lg:w-full flex justify-center items-center gap-2 lg:min-h-12"
            >
              <img
                src={logoGogle}
                alt="logo-google"
                className="h-5 w-5 lg:h-6.5 lg:w-6.5 object-contain"
              />
              <span className="hidden lg:inline text-sm font-medium lg:text-base">
                Sign In With Google
              </span>
            </button>

            <button
              type="button"
              className="cursor-pointer border border-dark-gray/30 rounded-3xl h-12 flex-1 lg:w-full flex justify-center items-center gap-2 lg:min-h-12"
            >
              <img
                src={logoFacebook}
                alt="logo-facebook"
                className="h-6 w-6 lg:h-8 lg:w-8 object-contain"
              />
              <span className="hidden lg:inline text-sm font-medium lg:text-base">
                Sign In With Facebook
              </span>
            </button>
          </div>

          <div className="flex w-full items-center gap-4 text-dark-gray/50">
            <div className="flex-1 border-t border-dark-gray/20" />
            <span className="text-sm">or</span>
            <div className="flex-1 border-t border-dark-gray/20" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full flex-col">
              <label htmlFor="email">Email</label>
              <div className="border border-dark-gray/30 rounded-xl px-4 py-2 flex items-center gap-2">
                <MdOutlineEmail size={20} />
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="Enter Your Email"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <p className="mt-2 text-xs sm:text-xs h-6 text-red-500">
              {errors.email?.message}
            </p>

            <div className="flex w-full flex-col">
              <label htmlFor="name">Name</label>
              <div className="border border-dark-gray/30 rounded-xl px-4 py-2 flex items-center gap-2">
                <CiUser size={20} />
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name minimal 3 character length",
                    },
                  })}
                  type="name"
                  placeholder="Enter Your Name"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <p className="mt-2 text-xs sm:text-xs h-6 text-red-500">
              {errors.name?.message}
            </p>

            <div className="flex w-full flex-col">
              <label htmlFor="password">Password</label>
              <div className="border border-dark-gray/30 rounded-xl px-4 py-2 flex items-center gap-2">
                <IoMdKey
                  className="border-2 border-slate-700 rounded-sm text-xl"
                  size={16}
                />
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="outline-none w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 focus:outline-none"
                >
                  {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
                </button>
              </div>
            </div>

            <p className="mt-2 text-xs sm:text-xs h-6 text-red-500">
              {errors.password?.message}
            </p>

            <div className="flex w-full flex-col">
              <label htmlFor="cpassword">Confirm Password</label>
              <div className="border border-dark-gray/30 rounded-xl px-4 py-2 flex items-center gap-2">
                <IoMdKey
                  className="border-2 border-slate-600 rounded-sm text-xl"
                  size={16}
                />
                <input
                  {...register("cpassword", {
                    required: "Confirm Password is required",
                  })}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Your Password Again"
                  className="outline-none w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-500 focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <LuEye size={20} />
                  ) : (
                    <LuEyeOff size={20} />
                  )}
                </button>
              </div>
            </div>

            <p className="mt-2 text-xs sm:text-xs h-6 text-red-500">
              {errors.cpassword?.message}
            </p>

            <button className="bg-primary text-white flex justify-center items-center py-3 rounded-xl cursor-pointer w-full hover:bg-primary/90 shadow-lg">
              Register
            </button>
          </form>

          <div className="flex justify-center items-center text-dark-gray">
            Have An Account?
            <Link
              to={"/auth/login"}
              className="text-primary ml-1 cursor-pointer"
            >
              Login
            </Link>
          </div>
        </section>
      </div>

      <div className="hidden md:flex bg-primary items-center justify-center p-8 relative overflow-hidden rounded-l-[40px]">
        <div className="w-full max-w-lg flex justify-center items-center">
          <img
            src={gamberRegis}
            alt="E-Wallet Illustration"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}
