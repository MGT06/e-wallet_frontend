import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router";

const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.authState.auth?.token);

  // useEffect(() => {
  //   if (location.pathname.includes("login") && token) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate, token, location.pathname]);

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
