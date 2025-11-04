import React from "react";
import { useNavigate } from "react-router-dom";

const roles = ["Admin", "HR", "Worker"];

export default function RoleSelect() {
  const nav = useNavigate();

  return (
    <div className="role-page">
      <div className="role-card">
        <h2>Maseru Textile — Choose your role</h2>
        <p>Select your role to continue</p>

        <div className="roles">
          {roles.map((r) => (
            <button
              key={r}
              className="role-btn"
              onClick={() => nav(`/auth/${r.toLowerCase()}`)}
            >
              {r}
            </button>
          ))}
        </div>

        <small className="hint">
          If you already have an account, sign in; otherwise sign up on the next
          screen.
        </small>
      </div>
    </div>
  );
}
