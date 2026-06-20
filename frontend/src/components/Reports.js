import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Reports.css";

function Reports() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [reports, setReports] = useState([
    {
      name: "Attendance Report",
      date: "15-06-2026",
      status: "Generated",
    },
    {
      name: "Training Report",
      date: "14-06-2026",
      status: "Generated",
    },
  ]);

  const generateReport = (reportName) => {

    const today = new Date();

    const currentDate =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    const newReport = {
      name: reportName,
      date: currentDate,
      status: "Generated",
    };

    setReports([
      ...reports,
      newReport,
    ]);
  };

  return (
    <div className="reports-dashboard">

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

      <div className="reports-main">

        <div className="reports-card">

          <h1 className="reports-title">
            Reports Management
          </h1>

          <button
            className="report-btn"
            onClick={() =>
              generateReport(
                "Attendance Report"
              )
            }
          >
            Generate Attendance Report
          </button>

          <button
            className="report-btn"
            onClick={() =>
              generateReport(
                "Training Report"
              )
            }
          >
            Generate Training Report
          </button>

          <button
            className="report-btn"
            onClick={() =>
              generateReport(
                "Trainee Report"
              )
            }
          >
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

                {reports.map(
                  (report, index) => (
                    <tr key={index}>

                      <td>
                        {report.name}
                      </td>

                      <td>
                        {report.date}
                      </td>

                      <td>
                        {report.status}
                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;