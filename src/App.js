import { useState } from "react";
import MenuList from "./components/MenuList";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.css";

function App() {
  const [order, setOrder] = useState([]);

  return (
    // <div className="App">
    //   <div className="Farm Fresh Fast Logo">
    //     <h1>Farm Fresh Fast</h1>
    //   </div>
    //   <MenuList />
    // </div>

    <Navbar bg="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="src/assets/farmfreshfastlogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Farm Fresh Fast logo"
          />
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
