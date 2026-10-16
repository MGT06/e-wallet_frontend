import { useForm, useWatch } from "react-hook-form";
import { usePinInput } from "../../hooks/UsePinInput";
import { NavLink } from "react-router";

export default function PinPage() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pin: ["", "", "", "", "", ""],
    },
  });

  const pinValues = useWatch({ control, name: "pin" });

  const { inputRefs, handleChange, handleKeyDown } = usePinInput({
    length: 6,
    setValue,
    getValues,
    name: "pin",
  });

  const onSubmit = (data) => {
    const isComplete = data.pin.every((digit) => digit !== "");
    if (!isComplete) {
      return;
    }

    const fullPin = data.pin.join("");
    console.log("PIN Submitted:", fullPin);
  };

  const hasPinError = Array.isArray(errors.pin) && errors.pin.some(Boolean);

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary p-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center gap-2">
          <img src="./LOGO.png" alt="logo-aps" className="h-8" />
          <h1 className="text-xl font-bold text-primary">E-Wallet</h1>
        </div>

        <h2 className="text-lg font-bold text-gray-800">Enter Your Pin 👋</h2>
        <p className="mt-1 text-sm text-gray-400">
          Please save your pin because this so important.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <div className="flex justify-between gap-2">
            {[0, 1, 2, 3, 4, 5].map((index) => {
              const { ref: registerRef, ...restRegister } = register(
                `pin.${index}`,
                {
                  required: "PIN harus diisi lengkap",
                  pattern: {
                    value: /^[0-9]$/,
                    message: "The PIN must be a number",
                  },
                },
              );

              const isInputError = errors.pin?.[index];

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
                  className={`h-12 w-10 border-b-2 text-center text-xl font-bold text-gray-800 transition-colors focus:outline-none ${
                    isInputError
                      ? "border-red-500 text-red-500"
                      : "border-gray-200 focus:border-primary"
                  }`}
                />
              );
            })}
          </div>

          <div className="mt-2 h-6">
            {hasPinError && (
              <p className="text-xs text-red-500">
                {errors.pin.find((err) => err?.message)?.message ||
                  "PIN belum lengkap"}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-primary py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-primary active:bg-primary"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Forgot Your Pin?{" "}
          <NavLink
            to="/forgot"
            className="font-semibold text-primary hover:underline"
          >
            Reset
          </NavLink>
        </div>
      </div>
    </div>
  );
}
