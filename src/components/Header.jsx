import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { Link, useLocation } from "react-router";

export default function Header() {
  const param = useLocation();
  const [title, setTitle] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    (() => {
      if (param?.pathname?.includes("transfer")) {
        setTitle("Transfer");
      }

      if (param?.pathname?.includes("history")) {
        setTitle("History");
      }

      if (param?.pathname?.includes("top-up")) {
        setTitle("Top Up");
      }

      if (param?.pathname?.includes("profile")) {
        setTitle("Profile");
      }
    })();
  }, [param, title]);

  return (
    <header className="lg:hidden bg-primary p-5 text-white text-1xl flex gap-4 border-b border-gray min-w-screen justify-between items-center z-50">
      <div className="flex gap-4">
        <img
          src="https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg"
          alt="profile"
          className="rounded-full h-10 w-10"
        />
        <div className="text-sm">
          <div>Hallo,</div>
          <div>Sigma Cat Wizard</div>
        </div>
      </div>
      <nav className="md:hidden">
        <div
          className={
            navOpen ? "text-3xl text-white cursor-pointer p-2" : "hidden"
          }
          onClick={handleClick}
        >
          <CgClose />
        </div>
        <div
          className={
            navOpen ? "hidden" : "text-3xl text-white cursor-pointer p-2"
          }
          onClick={handleClick}
        >
          <CgMenuRightAlt />
        </div>
        <ul
          className={`${navOpen ? "opacity-100" : "bg-primary opacity-0"} top-18 absolute p-1 flex flex-col gap-2 right-4 w-4/12 rounded-lg shadow-lg bg-white border-b border-dark-gray transition-all ease-in z-50`}
        >
          <li className="py-1 text-center text-red rounded-lg text-lg flex items-center justify-center gap-2">
            <BiLogOut className="text-xl" />
            <Link to="/register">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
