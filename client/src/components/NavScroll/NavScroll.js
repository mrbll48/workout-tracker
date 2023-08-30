import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Auth from "../../utils/auth";

function NavScroll({ opt1, opt2, opt3, opt4, opt5 }) {
  const handleLogout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Welcome!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {Auth.loggedIn() ? (
              <>
                <Nav.Link href="#action1" onClick={opt1}>
                  Create Post
                </Nav.Link>
                <Nav.Link href="#action1" onClick={opt2}>
                  Create Workout
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#action1" onClick={opt3}>
                  Login
                </Nav.Link>
                <Nav.Link href="#action1" onClick={opt4}>
                  Signup
                </Nav.Link>
              </>
            )}
            {/* <Nav.Link href="#action1" onClick={opt3}>
              Login
            </Nav.Link>
            <Nav.Link href="#action1" onClick={opt4}>
              Signup
            </Nav.Link>
            <Nav.Link href="#action1" onClick={opt1}>
              Create Post
            </Nav.Link>
            <Nav.Link href="#action1" onClick={opt2}>
              Create Workout
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Find a friend"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
