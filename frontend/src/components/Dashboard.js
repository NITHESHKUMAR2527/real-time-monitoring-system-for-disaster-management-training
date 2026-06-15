import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">

        <div className="logo">
          <h2>🚨 Disaster Training</h2>
        </div>

        <ul className="menu">
          <li className="active-menu">📊 Dashboard</li>
          <li>
  <Link
    to="/trainees"
    style={{
      color: "white",
      textDecoration: "none"
    }}
  >
    👨‍🎓 Trainees
  </Link>
</li>
          <li>
  <Link
    to="/attendance"
    style={{
      color: "white",
      textDecoration: "none"
    }}
  >
    📅 Attendance
  </Link>
</li>
          <li>
  <Link
    to="/trainings"
    style={{
      color: "white",
      textDecoration: "none"
    }}
  >
    🏋️ Trainings
  </Link>
</li>
          <li>
  <Link
    to="/notifications"
    style={{
      color: "white",
      textDecoration: "none"
    }}
  >
    🔔 Notifications
  </Link>
</li>
          <li>
  <Link
    to="/reports"
    style={{
      color: "white",
      textDecoration: "none"
    }}
  >
    📄 Reports
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
      <div className="main-content">

        <div className="topbar">

  <h1>Dashboard</h1>

  <div className="top-right">

    <div className="notification">
      🔔
      <span className="badge">3</span>
    </div>

    <div className="date-card">
      <p>16 June 2026</p>
      <small>Monday • 10:30 AM</small>
    </div>

    <div className="admin-info">
      <h4>Admin User</h4>
      <small>Administrator</small>
    </div>

  </div>

</div>

        <div className="welcome-section">
          <h2>Welcome Back, Admin 👋</h2>
          <p>Here's what's happening with the training programs today.</p>
        </div>

        {/* Statistics Cards */}
        <div className="stats-cards">

  <div className="stat-card trainer-card">
    <h3>Total Trainers</h3>
    <h1>25</h1>
    <p>Active Trainers</p>
  </div>

  <div className="stat-card trainee-card">
    <h3>Total Trainees</h3>
    <h1>150</h1>
    <p>Registered Trainees</p>
  </div>

  <div className="stat-card training-card">
    <h3>Active Trainings</h3>
    <h1>10</h1>
    <p>Ongoing Trainings</p>
  </div>

  <div className="stat-card report-card">
    <h3>Reports Generated</h3>
    <h1>45</h1>
    <p>Total Reports</p>
  </div>

</div>

        {/* Bottom Section */}

        <div className="bottom-section">

          <div className="progress-card">

            <h2>Training Progress Overview</h2>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <h3>80% Completed</h3>

          </div>

          <div className="activity-card">

            <h2>Recent Activities</h2>

            <ul>
              <li>✅ New trainee registered</li>
              <li>✅ Attendance updated</li>
              <li>✅ New training added</li>
              <li>✅ Report generated</li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;