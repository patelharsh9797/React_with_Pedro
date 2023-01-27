import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";

const ReactRouterDOM = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" exact element={<h1>Home</h1>} />
        <Route path="/home" exact element={<h1>Home</h1>} />
        <Route path="/route" element={<h1>ROUTE DESIGN</h1>} />
        <Route path="*" element={<h1>404. He Hi Nahiiii beeee</h1>} />
      </Routes>
    </div>
  );
};

export default ReactRouterDOM;
