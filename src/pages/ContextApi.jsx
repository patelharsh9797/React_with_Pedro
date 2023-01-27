import React, { useState, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";

// TODO: ContextApi

export const AppContext = createContext();

// TODO: Main Component
const ContextApi = () => {
  const [username, setUsername] = useState("Harsh");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <NavBar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppContext.Provider>
  );
};

// TODO Custom Components
const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <h1>
      Home <span>{username}</span>
    </h1>
  );
};
const Profile = () => {
  const { username } = useContext(AppContext);

  return (
    <>
      <h1>Profile Page : {username}</h1>
      <ChangeUser />
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

const ChangeUser = () => {
  const { setUsername } = useContext(AppContext);

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
export default ContextApi;
