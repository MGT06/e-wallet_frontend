import { FiEdit } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone, LuUserRound } from "react-icons/lu";
import { Link } from "react-router";

const MyProfile = () => {
  return (
    <section className="container w-full lg:border rounded-lg lg:border-dark-gray/20">
      <div className="grid grid-cols-4 grid-rows-8 lg:grid-cols-8 lg:grid-rows-4 gap-6">
        <div className="rounded-lg overflow-hidden col-span-2 row-span-2">
          <img
            className="w-full h-full"
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt="profile-img"
          />
        </div>
        <div className="col-start-3 lg:col-start-7 col-span-2">
          <Link className="w-full flex gap-2 items-center justify-center py-3 lg:py-2 px-4 rounded-lg bg-primary text-white text-xs hover:opacity-90 hover:shadow-lg">
            <FiEdit className="text-lg" />
            Change Profile
          </Link>
        </div>
        <div className="row-start-3 col-span-4 row-span-2">
          <div className="grid gap-2">
            <p className="text-lg lg:text-sm font-medium">Fullname</p>
            <div className="flex items-start gap-2 text-dark-gray">
              <LuUserRound className="text-lg" />
              <p className="text-xs">Ghaluh Wizard Anggoro</p>
            </div>
            <p className="text-lg lg:text-sm font-medium">Phone</p>
            <div className="flex items-start gap-2 text-dark-gray">
              <LuPhone className="text-lg" />
              <p className="text-xs">081239821932</p>
            </div>
            <p className="text-lg lg:text-sm font-medium">Email</p>
            <div className="flex items-start gap-2 text-dark-gray">
              <HiOutlineMail className="text-lg" />
              <p className="text-xs">ghaluhwizz@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="lg:row-start-3 lg:col-start-7 row-start-5 col-span-4 row-span-2">
          <div className="grid gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
