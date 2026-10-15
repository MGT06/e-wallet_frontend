import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone, LuTrash, LuUserRound } from "react-icons/lu";
import { Link } from "react-router";

const MyProfile = () => {
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
      <div className="flex flex-col justify-between lg:gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 lg:gap-4">
          <div className="grid gap-4 lg:gap-2">
            <h2 className="font-semibold text-xl lg:text-sm">My Profile</h2>
            <div className="flex gap-4 lg:gap-2 items-center justify-between lg:justify-start">
              <div className="rounded-lg overflow-hidden w-6/12 lg:w-26">
                <img
                  src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                  alt="profile-img"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 lg:gap-2 h-10/12 w-full lg:w-fit">
                <Link className="w-full flex gap-2 items-center justify-center py-3 lg:py-2 px-4 rounded-lg bg-primary text-white text-xs hover:opacity-90 hover:shadow-lg">
                  <FiEdit className="text-lg" />
                  Change Profile
                </Link>
                <Link className="w-full flex gap-2 items-center justify-center py-3 lg:py-2 px-4 rounded-lg border border-red text-red text-xs hover:opacity-90 hover:shadow-lg">
                  <LuTrash className="text-lg" />
                  Delete Profile
                </Link>
              </div>
            </div>
            <p className="text-sm lg:text-xs text-dark-gray">
              The profile picture must be 512 x 512 pixels or less
            </p>
          </div>
          <div className="grid gap-2">
            <label
              className="text-sm lg:text-xs font-medium"
              htmlFor="full_name"
            >
              Full Name
            </label>
            <div className="lg:p-2 p-4 text-sm lg:text-xs bg-white rounded-lg border border-gray-300 flex items-center gap-2">
              <LuUserRound className="text-lg text-dark-gray" />
              <input
                id="full_name"
                type="text"
                className={`${errors?.full_name?.message && "outline outline-red"}  focus:outline-none w-full`}
                placeholder="Ghaluh Wizard Anggoro"
                {...register("full_name")}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm lg:text-xs font-medium" htmlFor="phone">
              Phone
            </label>
            <div className="lg:p-2 p-4 text-sm lg:text-xs bg-white rounded-lg border border-gray-300 flex items-center gap-2">
              <LuPhone className="text-lg text-dark-gray" />
              <input
                id="phone"
                type="text"
                className={`${errors?.phone?.message && "outline outline-red"}  focus:outline-none w-full`}
                placeholder="Ghaluh Wizard Anggoro"
                {...register("phone")}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm lg:text-xs font-medium" htmlFor="email">
              Email
            </label>
            <div className="lg:p-2 p-4 text-sm lg:text-xs bg-white rounded-lg border border-gray-300 flex items-center gap-2">
              <HiOutlineMail className="text-lg text-dark-gray" />
              <input
                id="email"
                type="text"
                className={`${errors?.email?.message && "outline outline-red"}  focus:outline-none w-full`}
                placeholder="Ghaluh Wizard Anggoro"
                {...register("email")}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <p className="text-sm lg:text-xs font-medium">Password</p>
            <Link
              to="/change-password"
              className="text-sm lg:text-xs text-primary hover:underline"
            >
              Change Password
            </Link>
          </div>
          <div className="grid gap-2">
            <p className="text-sm lg:text-xs font-medium">Pin</p>
            <Link
              to="/change-pin"
              className="text-sm lg:text-xs text-primary hover:underline"
            >
              Change Pin
            </Link>
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

export default MyProfile;
