import { useState } from "react";
import "./Trainee.css";
import { Link, useNavigate } from "react-router-dom";

function Trainee() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const [trainees, setTrainees] = useState([
    {
      name: "JOSEPH C",
      email: "joseph@gmail.com",
      contact: "9952683020",
    },
    {
      name: "LEODAS J",
      email: "leo@gmail.com",
      contact: "7810018904",
    },
  ]);

  const addTrainee = () => {

    if (
      name === "" ||
      email === "" ||
      contact === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newTrainee = {
      name: name,
      email: email,
      contact: contact,
    };

    if (editIndex !== null) {

      const updatedTrainees = [...trainees];

      updatedTrainees[editIndex] = newTrainee;

      setTrainees(updatedTrainees);

      setEditIndex(null);

    } else {

      setTrainees([...trainees, newTrainee]);

    }

    setName("");
    setEmail("");
    setContact("");
  };

  const editTrainee = (index) => {

    setName(trainees[index].name);

    setEmail(trainees[index].email);

    setContact(trainees[index].contact);

    setEditIndex(index);
  };

  const deleteTrainee = (indexToDelete) => {

    const updatedTrainees = trainees.filter(
      (_, index) => index !== indexToDelete
    );

    setTrainees(updatedTrainees);
  };

  return (
    <div className="trainee-dashboard">

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

      <div className="trainee-main">

        <div className="trainee-card">

          <h1 className="trainee-title">
            Trainee Management
          </h1>

          <input
            type="text"
            placeholder="Full Name"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Contact Number"
            className="input-box"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <button
            className="trainee-btn"
            onClick={addTrainee}
          >
            {editIndex !== null
              ? "Update Trainee"
              : "Add Trainee"}
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

  {trainees
    .filter((trainee) =>
      trainee.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    )
    .map((trainee) => (

      <tr key={trainee.email}>

        <td>{trainee.name}</td>

        <td>{trainee.email}</td>

        <td>{trainee.contact}</td>

        <td>

          <button
            className="edit-btn"
            onClick={() =>
              editTrainee(
                trainees.findIndex(
                  (t) =>
                    t.email === trainee.email
                )
              )
            }
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() =>
              deleteTrainee(
                trainees.findIndex(
                  (t) =>
                    t.email === trainee.email
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

export default Trainee;