import { useState } from "react";

export default function Feedback() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  function submit() {
    if (text.trim() === "") return;
    setMessages([...messages, text]);
    setText("");
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Feedback</h2>
        <textarea placeholder="Write feedback..." value={text} onChange={e => setText(e.target.value)} style={{ width: "100%", height: 70 }}></textarea>
        <button onClick={submit} style={{ marginTop: 10 }}>Submit</button>

        <ul style={{ marginTop: 20 }}>
          {messages.map((m, i) => <li key={i}>✅ {m}</li>)}
        </ul>
      </div>
    </div>
  );
}
