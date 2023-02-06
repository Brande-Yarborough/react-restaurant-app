import { useState } from "react";
import MenuList from "./components/MenuList";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import ImageCarousel from "./components/ImageCarousel";
import MenuItem from "./components/MenuItem";
import Order from "./components/Order";

function App() {
  const [order, setOrder] = useState([]);

  const addToCart = (menuItem) => {
    setOrder([...order, menuItem]);
  };

  return (

    //react bootstrap navbar, carousel, and menu list
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
              <Nav.Link href="#menu">Menu</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>   
      <ImageCarousel />
      <div className="Menu-Cart-Container">
        <div className="Menu-List" id="menu">
          <MenuList addToCart={addToCart}/>
        </div>
        <div className="Cart-Aside">
          <Order order={order}/>
        </div>
      </div>
    </div> 
  );
}

export default App;
