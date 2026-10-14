import { Routes, Route, Navigate } from "react-router";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AuthLayout from "./layouts/AuthLayout";

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
    </Routes>
  );
};

export default Router;
