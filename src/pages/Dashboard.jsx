export default function Dashboard() {
    return (
      <div className="container">
        <div className="card">
          <h2>Dashboard</h2>
          <div style={{ display: "flex", gap: 20 }}>
            <div className="card" style={{ width: "30%", background: "#e8f1ff" }}>
              <h3>Patients</h3>
              <p>20 registered</p>
            </div>
            <div className="card" style={{ width: "30%", background: "#fff2d6" }}>
              <h3>Doctors</h3>
              <p>7 working</p>
            </div>
            <div className="card" style={{ width: "30%", background: "#e8ffe9" }}>
              <h3>Appointments</h3>
              <p>10 scheduled</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  