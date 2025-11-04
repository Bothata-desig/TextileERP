import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Auth() {
  const { role } = useParams<{ role: string }>();
  const nav = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side account storage for demo (not secure)
    const user = { name: name || "Unnamed", email, role: role || "worker" };
    localStorage.setItem("maseru_user", JSON.stringify(user));
    nav("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h3>{role?.toUpperCase() || "Role"} — {isSignUp ? "Sign Up" : "Sign In"}</h3>

        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <label className="field">
              <span>Full name</span>
              <input value={name} onChange={(e)=>setName(e.target.value)} required />
            </label>
          )}

          <label className="field">
            <span>Email</span>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </label>

          <label className="field">
            <span>Password</span>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </label>

          <div className="actions">
            <button type="submit" className="primary">{isSignUp ? "Create account" : "Sign in"}</button>
            <button type="button" className="link" onClick={()=>setIsSignUp(prev=>!prev)}>
              {isSignUp ? "Have an account? Sign in" : "Don't have an account? Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
