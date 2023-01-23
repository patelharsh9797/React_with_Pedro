import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ReactRouterDOM = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/route" element={<h1>ROUTE DESIGN</h1>} />
          <Route path="*" element={<h1>404. He Hi Nahiiii beeee</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

// TODO Custom Components
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home" className="btn">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/route" className="btn">
            Router Page
          </Link>
        </li>
        <li>
          <Link to="/homeeee" className="btn">
            Unknow PGE
          </Link>
        </li>
      </ul>
    </nav>
  );
};
const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default ReactRouterDOM;
