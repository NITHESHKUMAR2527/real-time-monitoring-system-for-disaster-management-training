import "./Notifications.css";
import { Link, useNavigate } from "react-router-dom";
function Notifications() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="notification-dashboard">

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

          <li>
            <Link to="/attendance" className="menu-link">
              📅 Attendance
            </Link>
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

          <li className="active-menu">
            🔔 Notifications
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

      <div className="notification-main">

        <div className="notification-card">

          <h1 className="notification-title">
            Notifications
          </h1>

          <div className="notify-box">
            ✅ New trainee registered
          </div>

          <div className="notify-box">
            ✅ Attendance updated
          </div>

          <div className="notify-box">
            ✅ New training scheduled
          </div>

          <div className="notify-box">
            ✅ Report generated
          </div>
          <div className="notify-box">
  🚨 Flood rescue training scheduled for tomorrow
</div>

<div className="notify-box">
  📢 Attendance submission deadline approaching
</div>

        </div>

      </div>

    </div>
  );
}

export default Notifications;