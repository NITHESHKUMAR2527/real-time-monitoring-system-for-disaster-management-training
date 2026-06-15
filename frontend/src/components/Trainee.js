import "./Trainee.css";
import { Link, useNavigate } from "react-router-dom";
function Trainee() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="trainee-dashboard">

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

          <li className="active-menu">
            👨‍🎓 Trainees
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

      <div className="trainee-main">

        <div className="trainee-card">

          <h1 className="trainee-title">
            Trainee Management
          </h1>

          <input
            type="text"
            placeholder="Full Name"
            className="input-box"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="input-box"
          />

          <input
            type="text"
            placeholder="Contact Number"
            className="input-box"
          />

          <button className="trainee-btn">
            Add Trainee
          </button>
          <div className="trainee-table">

  <h2>Trainee Records</h2>

  <table>

    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>JOSEPH C</td>
        <td>joseph@gmail.com</td>
        <td>9952683020</td>
        <td>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </td>
      </tr>

      <tr>
        <td>LEODAS J</td>
        <td>leo@gmail.com</td>
        <td>7810018904</td>
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

export default Trainee;