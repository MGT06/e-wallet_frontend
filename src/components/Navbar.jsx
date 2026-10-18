import { Link } from "react-router";

import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Navbar = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.authState.auth?.token);
  const auth = useSelector((state) => state.authState);
  const user = useSelector((state) => state.userState.user);
  const [loading, setLoading] = useState(false);

  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  const handleLogout = () => {
    setLoading(true);
    dispatch(
      logoutThunk({
        next: (message) => {
          toast.success(message);
        },
      }),
    );
  };

  useEffect(() => {
    (() => {
      if (!auth.isPending) {
        setLoading(false);
      }
    })();
  }, [auth]);

  return (
    <header
      className={`${token ? "lg:bg-white hidden lg:block" : "bg-primary"} bg-primary lg:block border-b border-b-dark-gray/20 sticky top-0 left-0 right-0 z-50`}
    >
      <div className="container flex items-center justify-between">
        <h1>
          <Link to="/" className="flex gap-2 items-center">
            <img className="h-7" src="/LOGO.png" alt="e-wallet_logo" />
            <p
              className={`${token ? "text-primary" : "text-white"} font-semibold`}
            >
              E Wallet
            </p>
          </Link>
        </h1>
        <nav className="hidden md:block">
          <ul
            className={`${token ? "hidden" : "flex"} items-center gap-4 text-xs`}
          >
            <li className="text-white border py-2 px-4 rounded-md hover:shadow-lg hover:opacity-90">
              <Link to="/auth/login">Sign In</Link>
            </li>
            <li className="text-primary bg-white border py-2 px-4 rounded-md hover:shadow-lg hover:opacity-90">
              <Link to="/auth/register">Sign Up</Link>
            </li>
          </ul>
          <div
            className={`${token ? "flex" : "hidden"} items-center gap-4 text-xs relative`}
          >
            <p className="text-sm">{user?.name}</p>
            {user?.image_url ? (
              <img
                className="h-8 w-8 rounded-full"
                src={`${import.meta.env.VITE_API_URL}/public/image/${user?.image_url}`}
                alt="user-img"
              />
            ) : (
              <div className="h-7 w-7 bg-primary text-white rounded-full flex items-center justify-center">
                <p>{`${user?.name[0].toUpperCase()}${user?.name[1].toUpperCase()}`}</p>
              </div>
            )}
            <IoIosArrowUp
              onClick={() => setNavOpen(!navOpen)}
              className={`${navOpen ? "block" : "hidden"} cursor-pointer text-lg`}
            />
            <IoIosArrowDown
              onClick={() => setNavOpen(!navOpen)}
              className={`${navOpen ? "hidden" : "block"} cursor-pointer text-lg`}
            />
            <div
              className={`${navOpen ? "opacity-100" : "opacity-0"} p-1 absolute right-0 top-14 grid gap-4 bg-white z-50 w-50 rounded-lg shadow-lg transition-all ease-in-out`}
            >
              <button
                type="button"
                onClick={handleLogout}
                className={`py-3 px-4 rounded-lg text-red flex items-center gap-2 cursor-pointer text-left hover:opacity-60 ${loading ? "justify-center" : ""}`}
              >
                <BiLogOut
                  className={`${loading ? "hidden" : "block"} text-sm`}
                />
                <AiOutlineLoading3Quarters
                  className={`${loading ? "block" : "hidden"} text-xl animate-spin`}
                />
                {loading ? "" : "Logout"}
              </button>
            </div>
          </div>
        </nav>
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
            className={`${navOpen ? "top-19" : "bg-primary opacity-0 -top-42"} absolute p-4 flex flex-col gap-2 left-0 w-full rounded-b-2xl shadow-lg bg-white transition-all ease-in`}
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
