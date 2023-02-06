import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Order({ order }) {
  const orderHTML = order.map((item, index) => (
    <div key={index}>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>{item.price}</Card.Text>
    </div>
  ));

  return (
    <Card className="cart-aside">
      <Card.Header>Cart</Card.Header>
      <Card.Body>
        {orderHTML}
        <Button className="submit-order" variant="primary">
          Submit Order
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Order;
