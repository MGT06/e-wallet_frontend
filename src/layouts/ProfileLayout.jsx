import { LuUsers } from "react-icons/lu";
import { Outlet } from "react-router";

const ProfileLayout = () => {
  return (
    <section className="lg:pr-11">
      <div className="lg:grid gap-4 hidden lg:px-8 pt-8 pb-4">
        <div className="flex items-center gap-2">
          <LuUsers className="text-primary text-xl" />
          <p className="font-semibold">Profile</p>
        </div>
      </div>
      <div className="lg:p-4">
        <Outlet />
      </div>
    </section>
  );
};

export default ProfileLayout;
