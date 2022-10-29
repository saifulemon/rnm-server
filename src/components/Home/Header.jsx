import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/adduser">Add-User</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
