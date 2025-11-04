import React from "react";
import { NavLink } from "react-router-dom";

export default function TopNav({ onLogout }: { onLogout: () => void }) {
  return (
    <header className="topbar">
      <div className="brand">Maseru Textile ERP</div>

      <nav className="top-links">
        <NavLink to="/dashboard" end>Dashboard</NavLink>
        <NavLink to="/dashboard/production">Production</NavLink>
        <NavLink to="/dashboard/inventory">Inventory</NavLink>
        <NavLink to="/dashboard/hr">HR</NavLink>
        <NavLink to="/dashboard/sales">Sales</NavLink>
        <NavLink to="/dashboard/reports">Reports</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>

      <div className="top-right">
        <button className="ghost" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
}
