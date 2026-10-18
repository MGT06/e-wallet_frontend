import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const AuthLayout = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.authState.auth);
  const isHasPin = useSelector((state) => state.authState.isHasPin);

  useEffect(() => {
    if (token && isHasPin) {
      navigate("/dashboard");
    }
  }, [navigate, token, isHasPin]);

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
