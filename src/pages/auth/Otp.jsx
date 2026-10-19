import { useForm, useWatch } from "react-hook-form";
import { usePinInput } from "../../hooks/UsePinInput";
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { checkOtp } from "../../redux/slices/authSlice";
import { useState } from "react";

export default function Otp() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });

  const navigate = useNavigate();

  const pinValues = useWatch({ control, name: "otp" });
  const dispatch = useDispatch();
  const email = useSelector((state) => state.authState.resetToken);
  const [customError, setCustomError] = useState(false);

  const { inputRefs, handleChange, handleKeyDown } = usePinInput({
    length: 6,
    setValue,
    getValues,
    name: "otp",
  });

  const onSubmit = (data) => {
    const isComplete = data.otp.every((digit) => digit !== "");
    if (!isComplete) {
      return;
    }

    const fullPin = data.otp.join("");
    dispatch(
      checkOtp({
        body: { email, otp: fullPin },
        next: () => {
          navigate("/auth/reset-password");
        },
        setErr: () => {
          setCustomError(true);
        },
      }),
    );
  };

  const hasPinError = Array.isArray(errors.otp) && errors.otp.some(Boolean);

  return (
    <section className="bg-primary min-h-screen flex justify-center items-center">
      <div>
        <div className="bg-white py-8 px-4 lg:px-8 rounded-2xl flex flex-col gap-4 shadow-3xl">
          <div className="flex items-center gap-2 min-w-full">
            <img src="/LOGO.png" alt="logo-aps" className="h-8 w-8" />
            <div className="text-primary font-semibold text-sm">E-Wallet</div>
          </div>

          <div className="text-xl lg:text-xl">Enter Your OTP 👋</div>

          <div className="text-sm text-dark-gray lg:text-medium">
            Please save your otp because this so important.
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 shadow-3xl"
          >
            <div className="flex justify-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const { ref: registerRef, ...restRegister } = register(
                  `otp.${index}`,
                  {
                    required: "PIN must be filled in completely",
                    pattern: {
                      value: /^[0-9]$/,
                      message: "The PIN must be a number",
                    },
                  },
                );

                const isInputError = errors.otp?.[index];

                return (
                  <input
                    key={index}
                    {...restRegister}
                    type="password"
                    inputMode="numeric"
                    maxLength={1}
                    value={pinValues[index] || ""}
                    ref={(e) => {
                      registerRef(e);
                      inputRefs.current[index] = e;
                    }}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`my-8 h-10 w-8 border-b-2 text-center text-xs font-bold text-gray-800 transition-colors focus:outline-none ${
                      isInputError
                        ? "border-red-500 text-red-500"
                        : "border-gray-200 focus:border-primary"
                    }`}
                  />
                );
              })}
            </div>

            <div>
              <p
                className={`mt-2 text-xs sm:text-xs h-6 ${customError ? "text-red-500" : "text-white"}`}
              >
                Invalid OTP
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
