import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function MenuItem({ name, price, addToCart }) {
  return (
    // <li className="menu-item">
    //   <div className="item-name">{name}</div>
    //   <div>{price}</div>
    //   <button className="cart-button">Add to cart</button>
    // </li>

    <div className="menu-item">
      <Card className="menu-card">
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Farm To Hands</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#favorites">Farm Favorites</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#salads">Salads</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#no-kill">No-Kill Menu</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title className="item-name">{name}</Card.Title>
          <Card.Title className="price">{price}</Card.Title>
          <Card.Text className="item-description">{description}</Card.Text>
          <Button
            type="button"
            variant="primary"
            onClick={() => addToCart({ name, price })}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MenuItem;
