import { useForm } from "react-hook-form";
import { TbSquareKey } from "react-icons/tb";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("first");
  };
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
                type="password"
                className={`${errors?.existing_password?.message && "outline outline-red"}  focus:outline-none w-full`}
                placeholder="Enter Your Existing Password"
                {...register("existing_password")}
              />
            </div>
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
                type="password"
                className={`${errors?.new_password?.message && "outline outline-red"}  focus:outline-none w-full`}
                placeholder="Enter Your New Password"
                {...register("new_password")}
              />
            </div>
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
                type="password"
                className={`${errors?.email?.message && "outline outline-red"}  focus:outline-none w-full`}
                placeholder="Re-type your new password"
                {...register("confirm_password")}
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-3 lg:py-2 bg-primary text-white rounded-lg hover:opacity-90 hover:shadow-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
