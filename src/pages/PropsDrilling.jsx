import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";

const PropsDrilling = () => {
  const [username, setUsername] = useState("Harsh");
  return (
    <>
      <NavBar username={username} />

      <Routes>
        <Route path="/" exact element={<h1>Home</h1>} />
        <Route path="/home" exact element={<h1>Home</h1>} />
        <Route
          path="/profile"
          element={<Profile username={username} setUsername={setUsername} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

// TODO Custom Cumponetns

const Profile = (props) => {
  return (
    <>
      <h1>Profile Page {props.username && <span>{props.username}</span>}</h1>
      <ChangeUser setUsername={props.setUsername} />
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h1>Contact Page</h1>
    </>
  );
};

const ChangeUser = ({ setUsername }) => {
  return (
    <div>
      <input
        type="text"
        name="userName"
        id="userName"
        // onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setUsername(userName.value)}>Change User</button>
    </div>
  );
};
export default PropsDrilling;
