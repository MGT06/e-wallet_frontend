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
import UserPin from "./pages/UserPin";
import ProfileLayout from "./layouts/ProfileLayout";
import EditProfile from "./pages/profile/EditProfile";
import MyProfile from "./pages/profile/MyProfile";
import ChangePin from "./pages/profile/ChangePin";
import ChangePassword from "./pages/profile/ChangePassword";
import TopUpPage from "./pages/TopUp/TopUpPage";
import ResetPassUi from "./pages/auth/ResetPassUi";
import Otp from "./pages/auth/Otp";

const Router = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="pin" element={<UserPin />} />
        <Route path="reset/password" element={<ResetPassUi />} />
        <Route path="otp" element={<Otp />} />
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

        <Route path="/top-up" element={<TopUpPage />} />

        <Route path="/history" element={<HistoryPage />} />

        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<MyProfile />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="change-pin" element={<ChangePin />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
