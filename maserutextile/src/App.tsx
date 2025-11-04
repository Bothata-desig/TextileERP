import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RoleSelect from "./pages/RoleSelect";
import Auth from "./pages/Auth";
import DashboardLayout from "./layouts/DashboardLayout";

/**
 * Simple client-side "auth" for demo:
 * - stores role and "logged" state in localStorage
 * - replace with real auth later
 */
const isLogged = () => !!localStorage.getItem("maseru_user");
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return isLogged() ? children : <Navigate to="/" replace />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelect />} />
      <Route path="/auth/:role" element={<Auth />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
