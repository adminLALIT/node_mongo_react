import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [premium, setPremium] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(name);
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
            // value={email}
            placeholder="Enter Email"
          />
        </div>
        <div className="userInput">
          <input
            className="input"
            type="password"
            name="password"
            // value={password}
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
