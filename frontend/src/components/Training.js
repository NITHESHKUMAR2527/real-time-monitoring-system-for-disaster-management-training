import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Training.css";

function Training() {
const navigate = useNavigate();

const handleLogout = () => {
navigate("/");
};

const [trainingName, setTrainingName] = useState("");
const [trainingDate, setTrainingDate] = useState("");
const [trainerName, setTrainerName] = useState("");
const [searchTerm, setSearchTerm] = useState("");

const [editIndex, setEditIndex] = useState(null);

const [trainings, setTrainings] = useState([
{
name: "Fire Safety Training",
date: "2026-06-20",
trainer: "John David",
},
{
name: "Flood Rescue Training",
date: "2026-06-25",
trainer: "Mary Evangel",
},
]);

const addTraining = () => {

  if (
    trainingName === "" ||
    trainingDate === "" ||
    trainerName === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  const newTraining = {
    name: trainingName,
    date: trainingDate,
    trainer: trainerName,
  };

  if (editIndex !== null) {

    const updatedTrainings = [...trainings];

    updatedTrainings[editIndex] = newTraining;

    setTrainings(updatedTrainings);

    setEditIndex(null);

  } else {

    setTrainings([...trainings, newTraining]);

  }

  setTrainingName("");
  setTrainingDate("");
  setTrainerName("");
};

const editTraining = (index) => {

  const selectedTraining = trainings[index];

  setTrainingName(selectedTraining.name);
  setTrainingDate(selectedTraining.date);
  setTrainerName(selectedTraining.trainer);

  setEditIndex(index);
};

const deleteTraining = (indexToDelete) => {

  const updatedTrainings = trainings.filter(
    (training, index) => index !== indexToDelete
  );

  setTrainings(updatedTrainings);
};

return ( <div className="training-dashboard">

```
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
        value={trainingName}
        onChange={(e) =>
          setTrainingName(e.target.value)
        }
      />

      <input
        type="date"
        className="input-box"
        value={trainingDate}
        onChange={(e) =>
          setTrainingDate(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Trainer Name"
        className="input-box"
        value={trainerName}
        onChange={(e) =>
          setTrainerName(e.target.value)
        }
      />

      <button
  className="training-btn"
  onClick={addTraining}
>
  {editIndex !== null
    ? "Update Training"
    : "Add Training"}
        </button>

        <input
  type="text"
  placeholder="Search Training..."
  className="input-box"
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
/>

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

  {trainings
    .filter((training) =>
      training.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    )
    .map((training) => (

      <tr key={training.name}>

        <td>{training.name}</td>

        <td>{training.date}</td>

        <td>{training.trainer}</td>

        <td>

          <button
            className="edit-btn"
            onClick={() =>
              editTraining(
                trainings.findIndex(
                  (t) =>
                    t.name === training.name
                )
              )
            }
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() =>
              deleteTraining(
                trainings.findIndex(
                  (t) =>
                    t.name === training.name
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

export default Training;
