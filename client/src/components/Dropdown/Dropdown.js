import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const apiKey = "4Z7299Xd9HEZMOuF2j15sg==HS0gwsLVKjmqzWlK";
const muscles = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
];
const m = document.getElementsByClassName("dropdown-item").value;

function CustomDropdown({ title, muscle, key, opt3, onClick }) {
  // console.log(title, opt1, opt2, opt3);
  // console.log(muscles);

  // const muscleOptions = muscles.map((muscle) => muscle.split(" "));
  // console.log(muscleOptions);

  const searchAPI = async (muscle) => {
    let options = {
      method: "GET",
      headers: { "x-api-key": apiKey },
    };

    // if (title === "Strength") {
    //   console.log(title);
    // } else if (title === "Stretching") {
    //   console.log(title);
    // } else if (title === "Cardio") {
    //   console.log(title);
    // }
    console.log(title, muscle);
    let url = `https://api.api-ninjas.com/v1/exercises?type=${title}&muscle=${muscle}&difficulty=beginner`;
    fetch(url, options)
      .then((res) => res.json())
      .then(function (workouts) {
        console.log(url, options);
        console.log(workouts);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
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
          <>
            {muscles.map((muscle) => (
              <Dropdown.Item onClick={() => searchAPI(muscle)} key={muscle}>
                {muscle}
              </Dropdown.Item>
            ))}
          </>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CustomDropdown;
