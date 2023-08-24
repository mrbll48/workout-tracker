import React from "react";
import "../css/box-component.css";

import Dropdown from "react-bootstrap/Dropdown";

function BoxComponent({ image, dropdownText }) {
  return (
    <div className="container">
      <div className="img-container">
        <img id="img-card" src={image} alt="" />
        <div className="dropdown-container">
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "black",
                // borderColor: "#c1a362"
              }}
              id="dropdown-basic"
            >
              {dropdownText}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default BoxComponent;
