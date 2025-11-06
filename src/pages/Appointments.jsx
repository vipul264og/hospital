import { useState } from "react";

export default function Appointments() {
  const [list, setList] = useState([
    { patient: "Aarav", doctor: "Dr. Neha", date: "2025-11-10" }
  ]);

  const [p, setP] = useState("");
  const [d, setD] = useState("");
  const [date, setDate] = useState("");

  function add() {
    setList([...list, { patient: p, doctor: d, date }]);
    setP(""); setD(""); setDate("");
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Appointments</h2>
        <input placeholder="Patient Name" value={p} onChange={e => setP(e.target.value)} />
        <input placeholder="Doctor" value={d} onChange={e => setD(e.target.value)} style={{ marginLeft: 10 }} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ marginLeft: 10 }} />
        <button onClick={add} style={{ marginLeft: 10 }}>Add</button>

        <table className="table">
          <thead><tr><th>Patient</th><th>Doctor</th><th>Date</th></tr></thead>
          <tbody>
            {list.map((a, i) => <tr key={i}><td>{a.patient}</td><td>{a.doctor}</td><td>{a.date}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
