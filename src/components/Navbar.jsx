import { Link } from "react-router";

import logo from "../assets/e-wallet_logo.svg";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-primary border-b border-white/20 sticky top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between">
        <h1>
          <Link to="/">
            <img className="h-7" src={logo} alt="e-wallet_logo" />
          </Link>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 text-xs">
            <li className="text-white border py-2 px-4 rounded-md hover:shadow-lg hover:opacity-90">
              <Link to="/login">Sign In</Link>
            </li>
            <li className="text-primary bg-white border py-2 px-4 rounded-md hover:shadow-lg hover:opacity-90">
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <nav className="md:hidden">
          <CgClose
            onClick={handleClick}
            className={
              navOpen ? "text-3xl text-white cursor-pointer" : "hidden"
            }
          />
          <CgMenuRightAlt
            onClick={handleClick}
            className={
              navOpen ? "hidden" : "text-3xl text-white cursor-pointer"
            }
          />
          <ul
            className={`${navOpen ? "top-14" : "bg-primary opacity-0 -top-42"} absolute section-container flex flex-col gap-4 left-0 w-full rounded-b-2xl shadow-lg bg-white transition-all ease-in`}
          >
            <li className="py-2 px-4 text-center text-primary rounded-lg">
              <Link to="/login">Sign In</Link>
            </li>
            <li className="py-2 px-4 text-center text-primary border border-primary rounded-lg">
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
