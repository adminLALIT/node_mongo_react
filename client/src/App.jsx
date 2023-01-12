import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [premium, setPremium] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
    };

    axios({
      url: "http://localhost:5000/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data sent to server");
      })
      .catch(() => {
        console.log("Server Error");
      });
  };

  return (
    <div className="container">
      <h1>Welcome to Hell</h1>
      <form action="" onSubmit={handleForm} className="form">
        <h3>User Info</h3>
        <div className="userInput">
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div className="userInput">
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="userInput">
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="userInput">
          <label>Premium:</label>
          <input type="radio" name="premium" value="true" /> True
          <input type="radio" name="premium" value="false" /> False
        </div>
        <div className="userInput">
          <input type="submit" value="Submit" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default App;
