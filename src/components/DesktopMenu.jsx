import { GrDashboard } from "react-icons/gr";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { CgExport } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi2";
import { NavLink } from "react-router";
import { BiLogOut } from "react-icons/bi";

const DesktopMenu = () => {
  return (
    <section className="py-8 px-2 pl-16 hidden lg:flex flex-col gap-4 text-white left-0 bottom-0">
      <NavLink
        to="/dashboard"
        className="flex items-center gap-3 py-3 px-3 rounded-lg bg-primary w-full"
      >
        <GrDashboard className="text-xl" />
        <p className="text-sm">Dashboard</p>
      </NavLink>
      <NavLink
        to="/transfer"
        className="flex items-center gap-3 py-3 px-3 rounded-lg w-full text-dark-gray"
      >
        <PiPaperPlaneTiltBold className="text-xl" />
        <p className="text-sm">Transfer</p>
      </NavLink>
      <NavLink
        to="/history"
        className="flex items-center gap-3 py-3 px-3 rounded-lg w-full text-dark-gray"
      >
        <MdHistory className="text-xl" />
        <p className="text-sm">History</p>
      </NavLink>
      <NavLink
        to="/topup"
        className="flex items-center gap-3 py-3 px-3 rounded-lg w-full text-dark-gray"
      >
        <CgExport className="text-xl" />
        <p className="text-sm">Top Up</p>
      </NavLink>
      <NavLink
        to="/profile"
        className="flex items-center gap-3 py-3 px-3 rounded-lg w-full text-dark-gray"
      >
        <HiOutlineUsers className="text-xl" />
        <p className="text-sm">Profile</p>
      </NavLink>
      <NavLink
        to="/logout"
        className="flex items-center gap-3 py-3 px-3 rounded-lg w-full text-red"
      >
        <BiLogOut className="text-xl" />
        <p className="text-sm">Log Out</p>
      </NavLink>
    </section>
  );
};

export default DesktopMenu;
