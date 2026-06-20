import { useState } from "react";
import "./Settings.css";
import { Link, useNavigate } from "react-router-dom";

function Settings() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [adminName, setAdminName] =
    useState("Admin User");

  const [adminEmail, setAdminEmail] =
    useState("admin@gmail.com");

  const [password, setPassword] =
    useState("");

  const updateSettings = () => {

    if (
      adminName === "" ||
      adminEmail === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Settings Updated Successfully!");

    console.log({
      adminName,
      adminEmail,
      password,
    });

    setPassword("");
  };

  return (
    <div className="settings-dashboard">

      <div className="sidebar">

        <div className="logo">
          <h2>🚨 Disaster Training</h2>
        </div>

        <ul className="menu">

          <li>
            <Link
              to="/dashboard"
              className="menu-link"
            >
              📊 Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/attendance"
              className="menu-link"
            >
              📅 Attendance
            </Link>
          </li>

          <li>
            <Link
              to="/trainees"
              className="menu-link"
            >
              👨‍🎓 Trainees
            </Link>
          </li>

          <li>
            <Link
              to="/trainings"
              className="menu-link"
            >
              🏋️ Trainings
            </Link>
          </li>

          <li>
            <Link
              to="/reports"
              className="menu-link"
            >
              📄 Reports
            </Link>
          </li>

          <li>
            <Link
              to="/notifications"
              className="menu-link"
            >
              🔔 Notifications
            </Link>
          </li>

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
            value={adminName}
            onChange={(e) =>
              setAdminName(
                e.target.value
              )
            }
          />

          <input
            type="email"
            placeholder="Admin Email"
            className="input-box"
            value={adminEmail}
            onChange={(e) =>
              setAdminEmail(
                e.target.value
              )
            }
          />

          <input
            type="password"
            placeholder="Change Password"
            className="input-box"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            className="settings-btn"
            onClick={updateSettings}
          >
            Update Settings
          </button>

          <div
            style={{
              marginTop: "25px",
              color: "white",
              textAlign: "left"
            }}
          >
            <h3>Current Settings</h3>

            <p>
              <strong>Name:</strong>{" "}
              {adminName}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {adminEmail}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;