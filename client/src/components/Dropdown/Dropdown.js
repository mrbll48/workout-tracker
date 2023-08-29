import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const key = "4Z7299Xd9HEZMOuF2j15sg==HS0gwsLVKjmqzWlK";

const muscles = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
];

function CustomDropdown({ title, opt1, opt2, opt3, onClick }) {
  // console.log(title, opt1, opt2, opt3);
  console.log(muscles);
  const muscleOptions = muscles.map((muscle) => muscle.split(" ").join());
  console.log(muscleOptions);

  const searchAPI = async () => {
    let options = {
      method: "GET",
      headers: { "x-api-key": key },
    };

    // if (title === "Strength") {
    //   console.log(title);
    // } else if (title === "Stretching") {
    //   console.log(title);
    // } else if (title === "Cardio") {
    //   console.log(title);
    // }
    console.log(title);
    // let url = `https://api.api-ninjas.com/v1/exercises?type=${title}&muscle=${opt2}&difficulty=${opt3}`;

    // fetch(url, options)
    //   .then((res) => res.json())
    //   .then(function (workouts) {
    //     console.log(url, options);
    //     console.log(workouts);
    //   })
    //   .catch((err) => {
    //     console.log(`error ${err}`);
    //   });
  };

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
          <Dropdown.Item onClick={searchAPI}>Done!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CustomDropdown;
