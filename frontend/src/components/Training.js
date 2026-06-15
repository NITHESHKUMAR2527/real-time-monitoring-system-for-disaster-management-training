import "./Training.css";
import { Link, useNavigate } from "react-router-dom";

function Training() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="training-dashboard">

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

          <li className="active-menu">
            🏋️ Trainings
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

      <div className="training-main">

        <div className="training-card">

          <h1 className="training-title">
            Training Management
          </h1>

          <input
            type="text"
            placeholder="Training Name"
            className="input-box"
          />

          <input
            type="date"
            className="input-box"
          />

          <input
            type="text"
            placeholder="Trainer Name"
            className="input-box"
          />

          <button className="training-btn">
            Add Training
          </button>

          <div className="training-table">

  <h2>Training Records</h2>

  <table>

    <thead>
      <tr>
        <th>Training Name</th>
        <th>Date</th>
        <th>Trainer</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>Fire Safety Training</td>
        <td>20-06-2026</td>
        <td>John David</td>
        <td>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </td>
      </tr>

      <tr>
        <td>Flood Rescue Training</td>
        <td>25-06-2026</td>
        <td>Mary Evangel</td>
        <td>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </td>
      </tr>

    </tbody>

  </table>

</div>

        </div>

      </div>

    </div>
  );
}

export default Training;