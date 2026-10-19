import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { logoutThunk } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Header() {
  const dispatch = useDispatch();
  const param = useLocation();

  const auth = useSelector((state) => state.authState);
  const user = useSelector((state) => state.userState.user);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
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

  useEffect(() => {
    (() => {
      if (param?.pathname?.includes("transfer")) {
        setTitle("Transfer");
      }

      if (param?.pathname?.includes("history")) {
        setTitle("History");
      }

      if (param?.pathname?.includes("topup")) {
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
        {user?.image_url ? (
          <img
            src={`${import.meta.env.VITE_API_URL}/public/image/${user?.image_url}`}
            alt="user-image"
            className="h-10 w-10 rounded-xl object-cover"
          />
        ) : (
          <div className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center">
            <p>{`${user?.name[0].toUpperCase()}${user?.name[1].toUpperCase()}`}</p>
          </div>
        )}
        <div className="text-sm">
          <div>Hallo,</div>
          <div>{user?.name}</div>
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
          <li
            onClick={handleLogout}
            className="py-1 text-center text-red rounded-lg text-lg flex items-center justify-center gap-2"
          >
            <BiLogOut className={`${loading ? "hidden" : "block"} text-sm`} />
            <AiOutlineLoading3Quarters
              className={`${loading ? "block" : "hidden"} text-xl animate-spin`}
            />
            {loading ? "" : "Logout"}
          </li>
        </ul>
      </nav>
    </header>
  );
}
