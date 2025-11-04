import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const raw = localStorage.getItem("maseru_user");
  const user = raw ? JSON.parse(raw) : { name: "Guest", email: "" };

  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar">{(user.name || "G").slice(0, 1)}</div>
        <div className="profile-info">
          <div className="name">{user.name}</div>
          <div className="role">{(user.role || "Worker").toUpperCase()}</div>
          <div className="email">{user.email}</div>
        </div>
      </div>

      <div className="quick-links">
        <button className="small" onClick={() => navigate("/dashboard/new")}>
          New
        </button>
        <button className="small" onClick={() => navigate("/dashboard/reports")}>
          Reports
        </button>
      </div>
    </aside>
  );
}
