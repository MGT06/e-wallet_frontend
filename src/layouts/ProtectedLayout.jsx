import { Outlet, useNavigate } from "react-router";
import Menu from "../components/Menu.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import DesktopMenu from "../components/DesktopMenu.jsx";
import { getUserInfo } from "../redux/slices/userSlice.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProtectedLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.authState.auth?.token);
  const isHasPin = useSelector((state) => state.authState.isHasPin);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    if (!isHasPin) {
      navigate("/auth/pin");
    }
  }, [navigate, isHasPin, token]);

  return (
    <main>
      <Header />
      <Navbar />
      <section className="grid lg:grid-cols-[1fr_4fr]">
        <Menu />
        <DesktopMenu />
        <Outlet />
      </section>
    </main>
  );
};

export default ProtectedLayout;
