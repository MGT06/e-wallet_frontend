import { Routes, Route, Navigate } from "react-router";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AuthLayout from "./layouts/AuthLayout";
import TransferLayout from "./layouts/TrasferLayout";
import FindPeople from "./pages/transfer/FindPeople";
import ProtectedLayout from "./layouts/ProtectedLayout";

const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="home" element={<HomePage />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/transfer" element={<TransferLayout />}>
          <Route index element={<Navigate to="find" replace />} />
          <Route path="find" element={<FindPeople />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
