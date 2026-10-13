import { Routes, Route, Navigate } from "react-router";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
