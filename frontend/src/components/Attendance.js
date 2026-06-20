import { useState } from "react";
import "./Attendance.css";
import { Link, useNavigate } from "react-router-dom";

function Attendance() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [traineeName, setTraineeName] = useState("");
  const [attendanceStatus, setAttendanceStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const [attendanceList, setAttendanceList] = useState([
    {
      name: "JOSEPH C",
      status: "Present",
    },
    {
      name: "LEODAS J",
      status: "Absent",
    },
  ]);

  const markAttendance = () => {

    if (
      traineeName === "" ||
      attendanceStatus === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newAttendance = {
      name: traineeName,
      status: attendanceStatus,
    };

    if (editIndex !== null) {

      const updatedAttendance = [...attendanceList];

      updatedAttendance[editIndex] = newAttendance;

      setAttendanceList(updatedAttendance);

      setEditIndex(null);

    } else {

      setAttendanceList([
        ...attendanceList,
        newAttendance,
      ]);

    }

    setTraineeName("");
    setAttendanceStatus("");
  };

  const editAttendance = (index) => {

    setTraineeName(
      attendanceList[index].name
    );

    setAttendanceStatus(
      attendanceList[index].status
    );

    setEditIndex(index);
  };

  const deleteAttendance = (indexToDelete) => {

    const updatedAttendance =
      attendanceList.filter(
        (_, index) =>
          index !== indexToDelete
      );

    setAttendanceList(
      updatedAttendance
    );
  };

  return (
    <div className="attendance-dashboard">

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

          <li className="active-menu">
            📅 Attendance
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

          <li>
            <Link
              to="/settings"
              className="menu-link"
            >
              ⚙️ Settings
            </Link>
          </li>

          <li onClick={handleLogout}>
            🚪 Logout
          </li>

        </ul>

      </div>

      <div className="attendance-main">

        <div className="attendance-card">

          <h1 className="attendance-title">
            Attendance Management
          </h1>

          <input
            type="text"
            placeholder="Trainee Name"
            className="input-box"
            value={traineeName}
            onChange={(e) =>
              setTraineeName(e.target.value)
            }
          />

          <select
            className="input-box"
            value={attendanceStatus}
            onChange={(e) =>
              setAttendanceStatus(
                e.target.value
              )
            }
          >
            <option value="">
              Select Status
            </option>

            <option value="Present">
              Present
            </option>

            <option value="Absent">
              Absent
            </option>
          </select>

          <button
            className="attendance-btn"
            onClick={markAttendance}
          >
            {editIndex !== null
              ? "Update Attendance"
              : "Mark Attendance"}
          </button>

          <input
  type="text"
  placeholder="Search Trainee..."
  className="input-box"
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
/>

          <div className="attendance-table">

            <h2>Attendance Records</h2>

            <table>

              <thead>
                <tr>
                  <th>Trainee Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

  {attendanceList
    .filter((attendance) =>
      attendance.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    )
    .map((attendance) => (

      <tr key={attendance.name}>

        <td>
          {attendance.name}
        </td>

        <td>
          {attendance.status}
        </td>

        <td>

          <button
            className="edit-btn"
            onClick={() =>
              editAttendance(
                attendanceList.findIndex(
                  (a) =>
                    a.name === attendance.name
                )
              )
            }
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() =>
              deleteAttendance(
                attendanceList.findIndex(
                  (a) =>
                    a.name === attendance.name
                )
              )
            }
          >
            Delete
          </button>

        </td>

      </tr>

    ))}

</tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Attendance;