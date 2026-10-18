import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const AuthLayout = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.authState.auth?.token);

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, token]);

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
