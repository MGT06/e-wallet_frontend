import { GrDashboard } from "react-icons/gr";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { CgExport } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi2";
import { NavLink } from "react-router";

export default function Menu() {
  return (
    <nav className="lg:hidden bg-white flex gap-4 p-2 fixed bottom-0 w-screen justify-center items-center shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">

      <div className="grid grid-cols-5 gap-2 py-2 text-sm">

        <NavLink 
        to="/dashboard" 
        className={({ isActive }) => 
          `flex justify-center items-center flex-col gap-2 cursor-pointer hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-gray-500"
        }`}>
          <GrDashboard size={35}/>
          <div>Dashboard</div>
        </NavLink>

        <NavLink 
        to="/transfer" 
        className={({ isActive }) => 
          `flex justify-center items-center flex-col gap-2 cursor-pointer hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-gray-500"
        }`}>
          <PiPaperPlaneTiltBold size={35}/>
          <div>Transfer</div>
        </NavLink>

        <NavLink 
        to="/history" 
        className={({ isActive }) => 
          `flex justify-center items-center flex-col gap-2 cursor-pointer hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-gray-500"
        }`}>
          <MdHistory size={35}/>
          <div>History</div>
        </NavLink>

        <NavLink 
        to="/topup" 
        className={({ isActive }) => 
          `flex justify-center items-center flex-col gap-2 cursor-pointer hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-gray-500"
        }`}>
          <CgExport size={35}/>
          <div>Top Up</div>
        </NavLink>

        <NavLink 
        to="/profile" 
        className={({ isActive }) => 
          `flex justify-center items-center flex-col gap-2 cursor-pointer hover:text-primary ${
            isActive ? "text-primary font-semibold" : "text-gray-500"
        }`}>
          <HiOutlineUsers size={35}/>
          <div>Profile</div>
        </NavLink>

      </div>
    </nav>
  )
}
