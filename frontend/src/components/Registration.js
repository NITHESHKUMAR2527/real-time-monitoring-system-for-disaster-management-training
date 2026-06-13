import "./Registration.css";

function Registration() {
  return (
    <div className="register-container">

      <div className="register-card">

        <h1>Trainee Registration</h1>

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

        <select className="input-box">
          <option>Select Training Program</option>
          <option>Fire Safety Training</option>
          <option>Flood Rescue Training</option>
          <option>Earthquake Response Training</option>
        </select>

        <button className="register-btn">
          Register
        </button>

      </div>

    </div>
  );
}

export default Registration;