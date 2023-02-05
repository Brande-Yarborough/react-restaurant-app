import { useState } from "react";
import MenuList from "./components/MenuList";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import UncontrolledExample from "./components/ImageCarousel";

function App() {
  const [order, setOrder] = useState([]);

  return (
    // <div className="App">
    //   <div className="Farm Fresh Fast Logo">
    //     <h1>Farm Fresh Fast</h1>
    //   </div>
    //   <MenuList />
    // </div>
    <div className="App">
      <Navbar className="navbar" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://static.spotapps.co/website_images/ab_websites/105011_website/logo_scroll.png"
              width="65"
              height="65"
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
      <UncontrolledExample />
      <div className="Menu-List">
        <MenuList/>
      </div>
    </div>
  );
}

export default App;
