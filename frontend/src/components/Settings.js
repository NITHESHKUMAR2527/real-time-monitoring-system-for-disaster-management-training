import "./Settings.css";
import { Link, useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="settings-dashboard">

      <div className="sidebar">

        <div className="logo">
          <h2>🚨 Disaster Training</h2>
        </div>

        <ul className="menu">

          <li><Link to="/dashboard" className="menu-link">📊 Dashboard</Link></li>
          <li><Link to="/attendance" className="menu-link">📅 Attendance</Link></li>
          <li><Link to="/trainees" className="menu-link">👨‍🎓 Trainees</Link></li>
          <li><Link to="/trainings" className="menu-link">🏋️ Trainings</Link></li>
          <li><Link to="/reports" className="menu-link">📄 Reports</Link></li>
          <li><Link to="/notifications" className="menu-link">🔔 Notifications</Link></li>

          <li className="active-menu">
            ⚙️ Settings
          </li>
          <li onClick={handleLogout}>
  🚪 Logout
</li>

        </ul>

      </div>

      <div className="settings-main">

        <div className="settings-card">

          <h1 className="settings-title">
            System Settings
          </h1>

          <input
            type="text"
            placeholder="Admin Name"
            className="input-box"
          />

          <input
            type="email"
            placeholder="Admin Email"
            className="input-box"
          />

          <input
            type="password"
            placeholder="Change Password"
            className="input-box"
          />

          <button className="settings-btn">
            Save Settings
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;