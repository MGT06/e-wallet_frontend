import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MainLayout = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.authState.auth?.token);

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, token]);
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
