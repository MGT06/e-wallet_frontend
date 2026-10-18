import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { TbSquareKey } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { changePass } from "../../redux/slices/userSlice.js";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();

  const userState = useSelector((state) => state.userState);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const newPassword = useWatch({ control, name: "new_password" });

  const [showPassword, setShowPassword] = useState({
    existing_password: false,
    new_password: false,
    confirm_password: false,
  });

  const onSubmit = (data) => {
    dispatch(
      changePass({
        data: {
          old_password: data.existing_password,
          new_password: data.new_password,
        },
        next: (m) => {
          toast.success(m);
          navi("/profile");
        },
        nextErr: (err) => {
          setError("existing_password", {
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
          "Failed to change password";
        setError("existing_password", {
          type: "server",
          message: errorMsg,
        });
      });
  };

  useEffect(() => {
    if (userState.isPending) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [userState.isPending]);

  return (
    <section className="container w-full lg:border rounded-lg lg:border-dark-gray/20">
      <div className="mb-4">
        <h2 className="font-semibold text-xl lg:text-sm">Change Password</h2>
      </div>
      <div className="flex flex-col justify-between lg:gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 lg:gap-4">
          <div className="grid gap-2">
            <label
              className="text-sm lg:text-xs font-medium"
              htmlFor="existing_password"
            >
              Existing Password
            </label>
            <div className="lg:p-2 p-4 text-sm lg:text-xs bg-white rounded-lg border border-gray-300 flex items-center gap-2">
              <TbSquareKey className="text-lg text-dark-gray" />
              <input
                id="existing_password"
                type={showPassword.existing_password ? "text" : "password"}
                className={`${errors?.existing_password?.message && "outline outline-red"}  focus:outline-none w-full outline-none`}
                placeholder="Enter Your Existing Password"
                {...register("existing_password", {
                  required: "Existing password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  onChange: () => {
                    if (errors.existing_password) {
                      clearErrors("existing_password");
                    }
                  },
                })}
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => {
                    return {
                      ...prev,
                      existing_password: !prev.existing_password,
                    };
                  })
                }
                className="text-gray-500 focus:outline-none cursor-pointer"
              >
                {showPassword.existing_password ? (
                  <LuEye size={20} />
                ) : (
                  <LuEyeOff size={20} />
                )}
              </button>
            </div>

            <p className="text-red-500 text-xs min-h-[1rem]">
              {errors.existing_password?.message}
            </p>
          </div>
          <div className="grid gap-2">
            <label
              className="text-sm lg:text-xs font-medium"
              htmlFor="new_password"
            >
              New Password
            </label>
            <div className="lg:p-2 p-4 text-sm lg:text-xs bg-white rounded-lg border border-gray-300 flex items-center gap-2">
              <TbSquareKey className="text-lg text-dark-gray" />
              <input
                id="new_password"
                type={showPassword.new_password ? "text" : "password"}
                className={`${errors?.new_password?.message && "outline outline-red"}  focus:outline-none w-full outline-none`}
                placeholder="Enter Your New Password"
                {...register("new_password", {
                  required: "New password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => {
                    return { ...prev, new_password: !prev.new_password };
                  })
                }
                className="text-gray-500 focus:outline-none cursor-pointer"
              >
                {showPassword.new_password ? (
                  <LuEye size={20} />
                ) : (
                  <LuEyeOff size={20} />
                )}
              </button>
            </div>
            <p className="text-red-500 text-xs min-h-[1rem]">
              {errors.new_password?.message}
            </p>
          </div>
          <div className="grid gap-2">
            <label
              className="password-sm lg:text-xs font-medium"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <div className="lg:p-2 p-4 text-sm lg:text-xs bg-white rounded-lg border border-gray-300 flex items-center gap-2">
              <TbSquareKey className="text-lg text-dark-gray" />
              <input
                id="confirm_password"
                type={showPassword.confirm_password ? "text" : "password"}
                className={`${errors?.confirm_password?.message && "outline outline-red"}  focus:outline-none w-full outline-none`}
                placeholder="Re-type your new password"
                {...register("confirm_password", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => {
                    return {
                      ...prev,
                      confirm_password: !prev.confirm_password,
                    };
                  })
                }
                className="text-gray-500 focus:outline-none cursor-pointer"
              >
                {showPassword.confirm_password ? (
                  <LuEye size={20} />
                ) : (
                  <LuEyeOff size={20} />
                )}
              </button>
            </div>

            <p className="text-red-500 text-xs min-h-[1rem]">
              {errors.confirm_password?.message}
            </p>
          </div>
          <button
            type="submit"
            className="py-3 lg:py-2 bg-primary flex items-center justify-center text-white rounded-lg hover:opacity-90 hover:shadow-lg cursor-pointer"
          >
            <AiOutlineLoading3Quarters
              className={`${loading ? "block" : "hidden"} text-xl animate-spin`}
            />
            {loading ? "" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
