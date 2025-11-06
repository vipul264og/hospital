import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  function handleLogin() {
    if (email && pass) nav("/dashboard");
  }

  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div className="card" style={{ width: 300 }}>
        <h2>Login</h2>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%" }} />
        <input placeholder="Password" type="password" value={pass} onChange={e => setPass(e.target.value)} style={{ width: "100%" }} />
        <button onClick={handleLogin} style={{ width: "100%", marginTop: 15 }}>Login</button>
      </div>
    </div>
  );
}
