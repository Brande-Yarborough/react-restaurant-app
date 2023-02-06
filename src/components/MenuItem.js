import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import MenuList from "./MenuList";
import Order from "./Order";
import { nanoid } from "nanoid";

function MenuItem({ name, price, description, category, addToCart }) {
  const menuItem = {
    id: nanoid(),
    name,
    price,
    description,
    category,
    addToCart,
  };

  return (
    <div className="menu-item">
      <Card className="menu-card" style={{ width: "45rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title className="item-name">{menuItem.name}</Card.Title>
          <Card.Title className="price">{menuItem.price}</Card.Title>
          <Card.Text className="item-description">
            {menuItem.description}
          </Card.Text>
          <Button
            className="cart-button"
            type="button"
            variant="primary"
            onClick={() => console.log({ name, price })}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MenuItem;
