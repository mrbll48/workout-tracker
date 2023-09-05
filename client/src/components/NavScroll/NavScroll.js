import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Auth from "../../utils/auth";
import Profile from "../Profile/Profile";

function NavScroll({ opt1, opt2, opt3, opt4 }) {
  const handleLogout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [value, setValue] = useState();
  const onInput = ({ target: { value } }) => setValue(value);
  const onFormSubmit = (e) => {
    e.preventDefault();

    setValue();
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#01577D",
        fontWeight: "bold",
        fontSize: "20px",
      }}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 px-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {Auth.loggedIn() ? (
              <>
                <Nav.Link href="/main">Home</Nav.Link>
                <Nav.Link href="/post" onClick={opt1}>
                  Create Post
                </Nav.Link>
                <Nav.Link href="/create-workout" onClick={opt2}>
                  Create Workout
                </Nav.Link>
                <Nav.Link href="/" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login" onClick={opt3}>
                  Login
                </Nav.Link>
                <Nav.Link href="/signup" onClick={opt4}>
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
          <Form className="d-flex" onSubmit={onFormSubmit}>
            <Form.Control
              type="text"
              placeholder="Find a friend"
              className="me-2"
              aria-label="Search"
              onChange={onInput}
              value={value}
            />
            <Button variant="dark" type="submit" href={`/profile/${value}`}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
