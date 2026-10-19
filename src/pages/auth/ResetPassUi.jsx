import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdKey } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ResetPassUi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.authState.isPending);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const here = (data) => {
    dispatch(
      resetPassword({
        new_password: data.password,
        next: () => {
          toast.success("Successfully reset password");
          navigate("/auth/login");
        },
        setErr: () => {
          toast.error("Set new password failed");
          navigate("/auth/login");
        },
      }),
    );
  };

  return (
    <section className="bg-primary min-h-screen flex justify-center items-center">
      <div>
        <div className="bg-white py-8 px-4 lg:px-8 rounded-2xl flex flex-col gap-4 shadow-3xl">
          <div className="flex items-center gap-2 min-w-full">
            <img src="/LOGO.png" alt="logo-aps" className="h-8 w-8" />
            <div className="text-primary font-semibold text-sm">E-Wallet</div>
          </div>

          <div className="text-xl lg:text-xl">Input your new password 👋</div>

          <div className="text-sm text-dark-gray lg:text-medium">
            We will save new password to your password
          </div>

          <form
            className="flex flex-col gap-2 shadow-3xl"
            onSubmit={handleSubmit(here)}
          >
            <label className="text-sm">New password</label>
            <div>
              <div className="flex gap-2 items-center text-xl border border-dark-gray/20 rounded-lg px-4 py-2">
                <IoMdKey
                  className="border-2 border-slate-700 rounded-sm text-xl"
                  size={16}
                />
                <input
                  {...register("password", {
                    required: "password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your password"
                  className=" outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 focus:outline-none ml-auto"
                >
                  {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
                </button>
              </div>
              <p className="mt-2 text-xs sm:text-xs h-6  text-red-500">
                {errors.password?.message}
              </p>
            </div>

            <button className="bg-primary rounded-lg text-white text-sm py-2 hover:opacity-80 cursor-pointer hover:shadow-lg flex items-center justify-center">
              <AiOutlineLoading3Quarters
                className={`${loading ? "block" : "hidden"} text-xl animate-spin`}
              />
              {loading ? "" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
