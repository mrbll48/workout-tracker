import React from "react";
import "../css/mainpage.css";

import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";

export default function MainPage() {
  return (
    <div className="main-container">
      <div className="nav-icons">
        <IconContext.Provider value={{ color: "white", size: "2.5em" }}>
          <div>
            <FaUserCircle />
          </div>
        </IconContext.Provider>
        ;
      </div>
    </div>
  );
}
