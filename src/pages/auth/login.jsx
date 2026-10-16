import { useEffect, useState } from "react";
import logoGogle from "../../assets/google.svg";
import logoFacebook from "../../assets/facebookLogo.svg";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
import gamberLogin from "../../assets/tanganLogin.svg";
import { Link, NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      loginThunk({
        data,
        next: (message, hasPin) => {
          toast.success(message);
          if (!hasPin) {
            navigate("/auth/pin");
            return;
          }
          navigate("/dashboard");
        },
      }),
    );
  };

  useEffect(() => {
    if (auth.isRejected) {
      setError("password", {
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

          <div className="font-semibold text-[19px]">Hello Welcome Back 👋</div>

          <div className="text-[12.5px] text-dark-gray">
            Fill out the form correctly or you can login with several option.
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
              <label>Email</label>
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

            <p className="m-2 text-xs sm:text-xs h-6 text-red-500">
              {errors.email?.message}
            </p>

            <div className="flex w-full flex-col">
              <div className="flex justify-between">
                <label>Password</label>
                <NavLink
                  className="text-primary hover:text-primary/60"
                  to="/auth/forgot"
                >
                  Forgot Password?
                </NavLink>
              </div>
              <div className="border border-dark-gray/30 rounded-xl px-4 py-2 flex items-center gap-2">
                <IoMdKey
                  className="border-2 border-slate-700 rounded-sm text-xl"
                  size={16}
                />
                <input
                  {...register("password", {
                    required: "Password is required",
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

            <p className="m-2 text-xs sm:text-xs h-6 text-red-500">
              {errors.password?.message}
            </p>

            <button className="bg-primary text-white flex justify-center items-center py-3 rounded-xl cursor-pointer w-full hover:bg-primary/90">
              Login
            </button>
          </form>
          <div className="flex justify-center items-center text-dark-gray">
            Have An Account?
            <Link
              to={"/auth/register"}
              className="text-primary ml-1 cursor-pointer"
            >
              Register
            </Link>
          </div>
        </section>
      </div>

      <div className="hidden md:flex bg-primary items-center justify-center p-8 relative overflow-hidden rounded-l-[40px]">
        <div className="w-full max-w-lg flex justify-center items-center">
          <img
            src={gamberLogin}
            alt="E-Wallet Illustration"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}
