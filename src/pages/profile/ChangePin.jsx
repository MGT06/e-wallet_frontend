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
    const isComplete = data.cpin.every((d) => d !== "")
    if(!isComplete){
      return;
    }
    console.log(data)

    // const fullPin = data.cpin.join("")
    // const pin = {
    //   cpin: fullPin,
    // };
  };

  return (
    <section>
      <div className="flex items-center justify-center min-h-full">
        <div className="w-10/12 lg:w-4/12 h-6/12 lg:h-8/12 rounded-lg bg-white p-8 flex flex-col justify-between">
          <div>
            <div className="py-4">
              <p className="text-lg font-semibold lg:text-sm">
                Enter Your Pin 👋
              </p>
              <p className="text-dark-gray lg:text-sm">
                Enter Your Pin For Transaction
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-around">
            <div className="grid grid-cols-6 gap-2 lg:gap-4">
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="flex justify-between gap-2">
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
                        maxlength={1}
                        value={cpinV[i] || ""}
                        ref={(e) => {
                          registerRef(e);
                          inputRefs.current[i] = e;
                        }}
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        className={`h-12 w-10 border-b-2 text-center text-xl font-bold  text-gray-800 transition-colors focus:outline-none ${
                          isInputErr
                            ? "border-red-500 text-red-500"
                            : "border-gray-200 focus:border-primary"
                        }`}
                      />
                    );
                  })}
                </div>

                <div className="mt-2 h-6">
                  {hasPinErr && (
                    <p className="text-xs text-red-500">
                      {errors.cpin.find((err) => err?.message)?.message ||
                        "PIN not complate"}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 mt-8 text-center">
                  <button className="py-4 lg:py-2 lg:text-sm bg-primary w-full text-white rounded-lg cursor-pointer hover:opacity-90 hover:shadow-lg">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePin;
