import "./Attendance.css";
import { Link, useNavigate } from "react-router-dom";

function Attendance() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="attendance-dashboard">

      {/* Sidebar */}
      <div className="sidebar">

        <div className="logo">
          <h2>🚨 Disaster Training</h2>
        </div>

        <ul className="menu">
          <li>
            <Link to="/dashboard" className="menu-link">
              📊 Dashboard
            </Link>
          </li>

          <li className="active-menu">
            📅 Attendance
          </li>

          <li>
  <Link to="/trainees" className="menu-link">
    👨‍🎓 Trainees
  </Link>
</li>
          <li>
  <Link to="/trainings" className="menu-link">
    🏋️ Trainings
  </Link>
</li>
          <li>
  <Link to="/reports" className="menu-link">
    📄 Reports
  </Link>
</li>
<li>
  <Link to="/notifications" className="menu-link">
    🔔 Notifications
  </Link>
</li>
          <li>
  <Link to="/settings" className="menu-link">
    ⚙️ Settings
  </Link>
</li>
<li onClick={handleLogout}>
  🚪 Logout
</li>
        </ul>

      </div>

      {/* Main Content */}

      <div className="attendance-main">

  <div className="attendance-card">

    <h1 className="attendance-title">
      Attendance Management
    </h1>

          <input
            type="text"
            placeholder="Trainee Name"
            className="input-box"
          />

          <select className="input-box">
            <option>Select Status</option>
            <option>Present</option>
            <option>Absent</option>
          </select>

          <button className="attendance-btn">
            Mark Attendance
          </button>

        </div>

      </div>

    </div>
  );
}

export default Attendance;