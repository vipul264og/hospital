import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/patients" element={<><Navbar /><Patients /></>} />
        <Route path="/appointments" element={<><Navbar /><Appointments /></>} />
        <Route path="/feedback" element={<><Navbar /><Feedback /></>} />
      </Routes>
    </BrowserRouter>
  );
}
