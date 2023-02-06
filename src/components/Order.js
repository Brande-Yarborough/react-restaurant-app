import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Order({ order }) {
  const orderHTML = order.map((order) => (
    <div key={order.id}>
      <Card.Title>{order.name}</Card.Title>
      <Card.Text>{order.price}</Card.Text>
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
