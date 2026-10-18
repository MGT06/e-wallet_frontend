import { useForm, useWatch } from "react-hook-form";
import { usePinInput } from "../../hooks/UsePinInput";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { useEffect, useState } from "react";

const ChangePin = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //     (() => {
  //       if (pin.isPending) {
  //         setLoading(true);
  //       } else {
  //         setLoading(false);
  //       }
  //     })();
  //   }, [pin]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cpin: ["", "", "", "", "", ""],
    },
  });

  const cpinV = useWatch({ control, name: "cpin" });

  const { inputRefs, handleChange, handleKeyDown } = usePinInput({
    length: 6,
    setValue,
    getValues,
    name: "cpin",
  });

  const hasPinErr = Array.isArray(errors.cpin) && errors.cpin.some(Boolean);

  const onSubmit = (data) => {
    const isComplete = data.cpin.every((d) => d !== "");
    if (!isComplete) {
      return;
    }

    const fullPin = data.cpin.join("")
    const pin = {
      cpin: fullPin,
    };

    console.log(pin)
  };

  return (
    <section className="w-full flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 flex flex-col items-center text-center shadow-sm border border-gray-100">
        <div className="pb-4">
          <p className="text-xl font-semibold text-gray-800">
            Enter Your Pin 👋
          </p>
          <p className="text-dark-gray text-sm mt-1">
            Enter Your Pin For Transaction
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4 flex flex-col items-center">
          <div className="flex justify-center items-center gap-2 sm:gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const { ref: registerRef, ...restRegister } = register(
                `cpin.${i}`,
                {
                  required: "PIN must be filled in completely",
                  pattern: {
                    value: /[0-9]$/,
                    message: "The PIN must be a number",
                  },
                },
              );

              const isInputErr = errors.cpin?.[i];

              return (
                <input
                  key={i}
                  {...restRegister}
                  type="password"
                  inputMode="numeric"
                  maxLength={1}
                  value={cpinV[i] || ""}
                  ref={(e) => {
                    registerRef(e);
                    inputRefs.current[i] = e;
                  }}
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className={`my-14 h-12 w-10 sm:w-12 border-b-2 text-center text-xl font-bold text-gray-800 transition-colors focus:outline-none ${
                    isInputErr
                      ? "border-red-500 text-red-500"
                      : "border-gray-300 focus:border-primary"
                  }`}
                />
              );
            })}
          </div>

          <div className="mt-3 min-h-6 flex items-center justify-center">
            {hasPinErr && (
              <p className="text-xs text-red-500 text-center">
                {errors.cpin.find((err) => err?.message)?.message ||
                  "PIN not complete"}
              </p>
            )}
          </div>

          <div className="w-full mt-6">
            <button
              type="submit"
              className="py-3 px-6 bg-primary w-full text-white font-medium rounded-lg cursor-pointer transition-opacity hover:opacity-90 hover:shadow-md"
            >
              Submit
            </button>
            {/* <button
              type="submit"
              className="mt-6 w-full flex items-center justify-center rounded-xl bg-primary py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-primary/90 active:bg-primary cursor-pointer">
              <AiOutlineLoading3Quarters
                className={`${loading ? "block" : "hidden"} text-xl animate-spin`}
                />
              {loading ? "" : "Submit"}
            </button> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ChangePin;
