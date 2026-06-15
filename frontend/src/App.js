import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notifications from "./components/Notifications";
import Trainee from "./components/Trainee";
import Reports from "./components/Reports";
import Training from "./components/Training";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendance";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/trainees" element={<Trainee />} />
        <Route path="/trainings" element={<Training />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;