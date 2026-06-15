import { Link, useNavigate } from "react-router-dom";
import "./Reports.css";


function Reports() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="reports-dashboard">

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

          <li className="active-menu">
            📄 Reports
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

      <div className="reports-main">

        <div className="reports-card">

          <h1 className="reports-title">
            Reports Management
          </h1>

          <button className="report-btn">
            Generate Attendance Report
          </button>

          <button className="report-btn">
            Generate Training Report
          </button>

          <button className="report-btn">
            Generate Trainee Report
          </button>
          <div className="reports-table">

  <h2>Generated Reports</h2>

  <table>

    <thead>
      <tr>
        <th>Report Name</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>Attendance Report</td>
        <td>15-06-2026</td>
        <td>Generated</td>
      </tr>

      <tr>
        <td>Training Report</td>
        <td>14-06-2026</td>
        <td>Generated</td>
      </tr>

    </tbody>

  </table>

</div>

        </div>

      </div>

    </div>
  );
}

export default Reports;