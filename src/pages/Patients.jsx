import { useState } from "react";

export default function Patients() {
  const [list, setList] = useState([{ name: "Aarav", age: 33 }]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function add() {
    setList([...list, { name, age }]);
    setName(""); setAge("");
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Patients</h2>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} style={{ marginLeft: 10 }} />
        <button onClick={add} style={{ marginLeft: 10 }}>Add</button>

        <table className="table">
          <thead><tr><th>Name</th><th>Age</th></tr></thead>
          <tbody>
            {list.map((p, i) => <tr key={i}><td>{p.name}</td><td>{p.age}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
