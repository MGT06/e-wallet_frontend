import { useForm, useWatch } from "react-hook-form";
import { usePinInput } from "../../hooks/UsePinInput";
import { useDispatch, useSelector } from "react-redux";
import { checkPin } from "../../redux/slices/userSlice";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";

const CheckPin = ({checkShow, setCheckShow, setCurrentPin, setChangeShow}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    () => {
      if (user.isPending) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    };
  }, [user]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    setError,
    clearErrors,
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

  const hasArrayPinErr = Array.isArray(errors.cpin) && errors.cpin.some(Boolean);
  const rootPinErr = errors.cpin?.root?.message || errors.cpin?.message;
  const pinErrorMessage =
    rootPinErr ||
    (hasArrayPinErr && errors.cpin.find((err) => err?.message)?.message);

  const onInputChange = (e, i) => {
    if (errors.cpin) {
      clearErrors("cpin");
    }
    handleChange(e, i);
  };

  const onSubmit = (data) => {
    const isComplete = data.cpin.every((d) => d !== "");
    if (!isComplete) {
      setError("cpin.root", {
        type: "manual",
        message: "PIN must be filled in completely",
      });
      return;
    }

    const fullPin = data.cpin.join("");
    const cpin = {
      pin: fullPin,
    };

    setLoading(true);

    dispatch(
      checkPin({
        cpin,
        next: () => {
          toast.success("Appropriate pin");
          setCheckShow(false)
          setChangeShow(true)
          setCurrentPin(cpin.pin)
        },
        nextErr: (err) => {
          setError("cpin.root", {
            type: "server",
            message: err,
          });
        },
      }),
    )
      .unwrap()
      .catch((rejected) => {
        const errorMsg =
          rejected?.message ||
          rejected?.data?.message ||
          "pin not match";
        setError("cpin.root", {
          type: "server",
          message: errorMsg,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={`${!checkShow && "hidden"}`}>
      <p className="text-xl font-semibold text-gray-800">Enter Your Current Pin 👋</p>
      <p className="text-dark-gray text-sm mt-1">
        Enter the registered PIN 
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mt-4 flex flex-col items-center">
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

            const isInputErr = errors.cpin?.[i] || rootPinErr;

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
                onChange={(e) => onInputChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={`my-8 h-12 w-10 sm:w-12 border-b-2 text-center text-xl font-bold text-gray-800 transition-colors focus:outline-none ${
                  isInputErr
                    ? "border-red-500 text-red-500"
                    : "border-gray-300 focus:border-primary"
                }`}
              />
            );
          })}
        </div>

        <div className="mt-3 min-h-6 flex items-center justify-center">
          {pinErrorMessage && (
            <p className="text-xs text-red-500 text-center">
              {pinErrorMessage}
            </p>
          )}
        </div>

        <div className="w-full mt-6">
          <button
            type="submit"
            disabled={loading || user.isPending}
            className="mt-6 w-full flex items-center justify-center rounded-xl bg-primary py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-primary/90 active:bg-primary cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
            <AiOutlineLoading3Quarters
              className={`${loading ? "block" : "hidden"} text-xl animate-spin`}
            />
            {loading ? "" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckPin;
