import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

function CustomDropdown({ title, opt1, opt2, opt3, onClick }) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          style={{
            backgroundColor: "black",
            paddingTop: "5px",
            // borderColor: "#c1a362"
          }}
          id="dropdown-basic"
        >
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>{opt1}</Dropdown.Item>
          <Dropdown.Item>{opt2}</Dropdown.Item>
          <Dropdown.Item>{opt3}</Dropdown.Item>
          <Dropdown.Item onClick={onClick}>Done!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CustomDropdown;
