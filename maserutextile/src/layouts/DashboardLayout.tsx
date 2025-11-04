import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import NewEntry from "../pages/NewEntry";
import ReportsPage from "../pages/Reports";
import Dashboard from "../pages/Dashboard";
import Production from "../pages/Production"; 
import Inventory from "../pages/Inventory";
import HR from "../pages/HR";

const Sales = () => (
  <div className="module-panel">
    <h2>Sales & Purchases</h2>
    <p>Handle customer orders, supplier invoices, and pricing.</p>
  </div>
);

const Settings = () => (
  <div className="module-panel">
    <h2>Settings</h2>
    <p>Configure roles, departments, and company preferences.</p>
  </div>
);

export default function DashboardLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("maseru_user");
    navigate("/");
  };

  return (
    <div className="erp-root flex flex-col min-h-screen">
      {/* Top Navigation */}
      <TopNav onLogout={logout} />

      <div className="erp-body flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="erp-main flex-1 p-6 bg-gray-50 overflow-auto">
          <Routes>
            {/* Dashboard home */}
            <Route index element={<Dashboard />} />

            {/* Functional modules */}
            <Route path="production" element={<Production />} /> {/* ✅ now loads your full page */}
            <Route path="inventory" element={<Inventory />} /><Route path="hr" element={<HR />} />
            <Route path="sales" element={<Sales />} />
            <Route path="settings" element={<Settings />} />

            {/* Data entry + reports */}
            <Route path="new" element={<NewEntry />} />
            <Route path="reports" element={<ReportsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
