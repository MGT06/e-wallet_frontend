import { Routes, Route, Navigate } from "react-router";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Dashboard from "./pages/Dashboard";
import TransferLayout from "./layouts/TrasferLayout";
import FindPeople from "./pages/transfer/FindPeople";
import SetNominal from "./pages/transfer/SetNominal";
import HistoryPage from "./pages/HistoryPage";
import Forgot from "./pages/auth/Forgot";
import UserPin from "./pages/auth/UserPin";

const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/pin" element={<UserPin />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="home" element={<HomePage />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/transfer" element={<TransferLayout />}>
          <Route index element={<Navigate to="find" replace />} />
          <Route path="find" element={<FindPeople />} />
          <Route path="nominal" element={<SetNominal />} />
        </Route>

        <Route path="/history" element={<HistoryPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
