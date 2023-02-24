import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Order({
  order,
  subTotal,
  removeItem,
  clearCart,
  submitOrder,
  customer,
}) {
  const [show, setShow] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const handleClose = () => setShow(false);
  const orderHTML = order.map((item, index) => (
    <div key={index}>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>${item.price}</Card.Text>
      <Button
        onClick={() => {
          removeItem(index);
        }}
        className="remove-item"
        variant="primary"
      >
        Remove Item
      </Button>
    </div>
  ));

  const handleSubmitOrder = () => {
    console.log(order);
    // localStorage.setItem("order", JSON.stringify(order));
    setShow(true);
  };

  const handleCompleteOrder = () => {
    const orders = JSON.parse(localStorage.getItem("ordersdemo")) || [];
    console.log({ order });

    const newOrder = {
      customerName,
      customerEmail,
      items: order,
    };
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
    setShow(false);
    alert("Thank you for your order!");
    clearCart();
  };

  return (
    <>
      <Card className="cart-aside">
        <Card.Header>Cart</Card.Header>
        <Card.Body>
          {orderHTML}
          <div>Subtotal:${subTotal}</div>

          <Button
            onClick={handleSubmitOrder}
            className="submit-order"
            variant="primary"
          >
            Submit Order
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                name="customerEmail"
                type="text"
                placeholder="FirstName LastName"
                autoFocus
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="customerEmail"
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
          {orderHTML}
          <div>Total:${subTotal}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="button" variant="primary" onClick={handleCompleteOrder}>
            Complete Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Order;
