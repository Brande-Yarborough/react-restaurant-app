function MenuItem({ name, price, addToCart }) {
  return (
    <li className="menu-item">
      <div className="item-name">{item.name}</div>
      <div>{item.price}</div>
      <button className="cart-button">Add to cart</button>
    </li>
  );
}

export default MenuItem;
