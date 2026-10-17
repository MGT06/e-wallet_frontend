import { GrDashboard } from "react-icons/gr";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { CgExport } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi2";
import { NavLink } from "react-router";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";

import { logoutThunk } from "../redux/slices/authSlice";
import useToken from "../hooks/UseToken";
import { toast } from "react-toastify";

const DesktopMenu = () => {
  const dispatch = useDispatch();
  const token = useToken();

  const handleLogout = () => {
    dispatch(
      logoutThunk({
        token,
        next: (message) => {
          toast.success(message);
        },
      }),
    );
  };
  return (
    <section className="py-8 px-2 pl-16 hidden lg:flex flex-col gap-4 text-white left-0 bottom-0 border border-r-dark-gray/20">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 px-3 rounded-lg w-full ${isActive ? "bg-primary" : "bg-white text-dark-gray hover:bg-blue-50"}`
        }
      >
        <GrDashboard className="text-xl" />
        <p className="text-sm">Dashboard</p>
      </NavLink>
      <NavLink
        to="/transfer"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 px-3 rounded-lg w-full ${isActive ? "bg-primary" : "bg-white text-dark-gray hover:bg-blue-50"}`
        }
      >
        <PiPaperPlaneTiltBold className="text-xl" />
        <p className="text-sm">Transfer</p>
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 px-3 rounded-lg w-full ${isActive ? "bg-primary" : "bg-white text-dark-gray hover:bg-blue-50"}`
        }
      >
        <MdHistory className="text-xl" />
        <p className="text-sm">History</p>
      </NavLink>
      <NavLink
        to="/top-up"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 px-3 rounded-lg w-full ${isActive ? "bg-primary" : "bg-white text-dark-gray hover:bg-blue-50"}`
        }
      >
        <CgExport className="text-xl" />
        <p className="text-sm">Top Up</p>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 px-3 rounded-lg w-full ${isActive ? "bg-primary" : "bg-white text-dark-gray hover:bg-blue-50"}`
        }
      >
        <HiOutlineUsers className="text-xl" />
        <p className="text-sm">Profile</p>
      </NavLink>
      <button
        type="button"
        onClick={handleLogout}
        className="flex items-center gap-3 py-3 px-3 rounded-lg w-full text-red hover:opacity-70 hover:bg-red-50"
      >
        <BiLogOut className="text-xl" />
        <p className="text-sm">Log Out</p>
      </button>
    </section>
  );
};

export default DesktopMenu;
