import { Outlet, useNavigate } from "react-router";
import Menu from "../components/Menu.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import DesktopMenu from "../components/DesktopMenu.jsx";
import useToken from "../hooks/UseToken.js";
import { useEffect } from "react";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const token = useToken();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

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
