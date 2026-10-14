import { Routes, Route, Navigate } from "react-router";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Transfer from "./pages/dashboard/Transfer";
import History from "./pages/dashboard/History";
import TopUp from "./pages/dashboard/TopUp";
import Profile from "./pages/dashboard/Profile";

const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Route>

      <Route element={<ProtectedLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/transfer" element={<Transfer/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/topup" element={<TopUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
    </Routes>
  );
};

export default Router;
