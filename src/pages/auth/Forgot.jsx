import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { checkEmail } from "../../redux/slices/authSlice.js";
import { useNavigate } from "react-router";

export default function Forgot() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const here = (data) => {
    dispatch(
      checkEmail({
        body: data,
        next: () => {
          navigate("/auth/otp");
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

          <div className="text-xl lg:text-xl">Fill Out Form Correctly 👋</div>

          <div className="text-sm text-dark-gray lg:text-medium">
            We will send new password to your email
          </div>

          <form
            className="flex flex-col gap-2 shadow-3xl"
            onSubmit={handleSubmit(here)}
          >
            <label className="text-sm">Email</label>
            <div>
              <div className="flex gap-2 items-center text-xl border border-dark-gray/20 rounded-lg px-4 py-2">
                <AiOutlineMail className="text-dark-gray/50" />
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="Enter Your Email"
                  className=" outline-none text-xs"
                />
              </div>
              <p className="mt-2 text-xs sm:text-xs h-6  text-red-500">
                {errors.email?.message}
              </p>
            </div>

            <button className="bg-primary rounded-lg text-white text-sm py-2 hover:opacity-80 cursor-pointer hover:shadow-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
