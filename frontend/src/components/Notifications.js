import { useState } from "react";
import "./Notifications.css";
import { Link, useNavigate } from "react-router-dom";

function Notifications() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [message, setMessage] = useState("");

  const [notifications, setNotifications] = useState([
    "New trainee registered",
    "Attendance updated",
    "New training scheduled",
    "Report generated",
    "Flood rescue training scheduled for tomorrow",
    "Attendance submission deadline approaching"
  ]);

  const addNotification = () => {

    if (message.trim() === "") {
      alert("Please enter notification message");
      return;
    }

    setNotifications([
      ...notifications,
      message
    ]);

    setMessage("");
  };

  const deleteNotification = (indexToDelete) => {

    const updatedNotifications =
      notifications.filter(
        (_, index) =>
          index !== indexToDelete
      );

    setNotifications(updatedNotifications);
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

          <input
            type="text"
            placeholder="Enter Notification Message"
            className="input-box"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
          />

          <button
            className="notify-btn"
            onClick={addNotification}
          >
            Add Notification
          </button>

          <div className="notification-table">

            <h2>Notification Records</h2>

            <table>

              <thead>
                <tr>
                  <th>Notification Message</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {notifications.map(
                  (notification, index) => (
                    <tr key={index}>

                      <td>{notification}</td>

                      <td>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            deleteNotification(index)
                          }
                        >
                          Delete
                        </button>

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

export default Notifications;