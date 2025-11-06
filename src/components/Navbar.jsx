import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ background: "white", padding: 15, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ margin: 0 }}>🏥 Hospital UI</h2>
        <div style={{ display: "flex", gap: 15 }}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/patients">Patients</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/feedback">Feedback</Link>
        </div>
      </div>
    </div>
  );
}
