import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ username }) => {
  return (
    <nav>
      {username && <h2>UserName : {username}</h2>}
      <ul>
        <li>
          <Link to="/home" className="btn">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/profile" className="btn">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
