import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { usePinInput } from "../hooks/UsePinInput";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { transfer } from "../redux/slices/transactionSlice";

const PinModal = ({
  body,
  setSuccessShowModal,
  setFailedShowModal,
  setShowPinModal,
}) => {
  const dispatch = useDispatch();

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
  const [loading, setLoading] = useState(false);

  const { inputRefs, handleChange, handleKeyDown } = usePinInput({
    length: 6,
    setValue,
    getValues,
    name: "pin",
  });

  const hasPinError = Array.isArray(errors.pin) && errors.pin.some(Boolean);

  const onSubmit = (data) => {
    dispatch(
      transfer({
        body: { ...body, pin: data.pin.join("") },
        next: () => {
          setShowPinModal(false);
          setSuccessShowModal(true);
        },
        setErr: () => {
          setShowPinModal(false);
          setFailedShowModal(true);
        },
      }),
    );
  };

  return (
    <article className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-40">
      <div className="flex items-center justify-center h-full">
        <div className="w-10/12 lg:w-4/12 h-6/12 lg:h-8/12 rounded-2xl bg-white p-8 flex flex-col justify-between">
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
            <div className="w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full">
                <div className="flex justify-between gap-2">
                  {[0, 1, 2, 3, 4, 5].map((index) => {
                    const { ref: registerRef, ...restRegister } = register(
                      `pin.${index}`,
                      {
                        required: "PIN must be filled in completely",
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

                <div className="mt-2 h-6 w-full">
                  {hasPinError && (
                    <p className="text-xs text-red-500">
                      {errors.pin.find((err) => err?.message)?.message ||
                        "PIN not complete"}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full flex items-center justify-center rounded-xl bg-primary py-2 text-base font-semibold text-white shadow-md transition-colors hover:bg-primary/90 active:bg-primary cursor-pointer"
                >
                  <AiOutlineLoading3Quarters
                    className={`${loading ? "block" : "hidden"} text-xl animate-spin`}
                  />
                  {loading ? "" : "Submit"}
                </button>
              </form>
            </div>
          </div>
          <div className="grid gap-4 mt-8 text-center">
            <div className="flex items-center justify-center gap-2 lg:text-sm">
              <p>Forgot Your Pin?</p>
              <Link className="text-primary" to="/profile/change-pin">
                Reset
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PinModal;
