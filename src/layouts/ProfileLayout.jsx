import { LuUsers } from "react-icons/lu";
import { Outlet } from "react-router";

const ProfileLayout = () => {
  return (
    <section className="lg:pr-11 px-8 lg:bg-gray-50 lg:p-8">
      <div className="lg:grid gap-4 hidden lg:py-4 lg:px-8 bg-white lg:rounded-2xl lg:shadow-sm">
        <div className="flex items-center gap-2">
          <LuUsers className="text-primary text-xl" />
          <p className="font-semibold">Profile</p>
        </div>
      </div>
      <div className="lg:px-1 lg:py-6">
        <Outlet />
      </div>
    </section>
  );
};

export default ProfileLayout;
