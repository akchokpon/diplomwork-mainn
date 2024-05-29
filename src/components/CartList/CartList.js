import React, { useContext } from 'react';
import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import delivery1 from "../../assets/order1.png";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    if (qty >= 0) {
      setCart((prevCart) => ({
        ...prevCart,
        [product.id]: qty
      }));
    }
  }

  function incrementQuantity(product) {
    const newQuantity = (cart[product.id] || 0) + 1;
    onQuantityChange(product, newQuantity);
  }

  function decrementQuantity(product) {
    const newQuantity = (cart[product.id] || 0) - 1;
    onQuantityChange(product, newQuantity);
  }

  function onItemRemove(product) {
    setCart((prevCart) => {
      const { [product.id]: _, ...newCart } = prevCart;
      return newCart;
    });
  }

  const productIds = Object.keys(cart);

  const total = productIds.reduce((acc, productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      return acc + (product.price * cart[productId]);
    }
    return acc;
  }, 0);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="cartItem" key={product.id}>
        <Link to={"/products/" + product.slug}>
          <img src={product.picture} alt={product.name + " product image"} />
        </Link>
        <div className="itemDetails">
          <Link to={"/products/" + product.slug}>{product.name}</Link>
          <span>${product.price}</span>
          <div className="inputs">
            <button className="quantityButton" onClick={() => decrementQuantity(product)}>-</button>
            <input
              type="number"
              value={cart[product.id]}
              min={0}
              onChange={(event) => onQuantityChange(product, +event.target.value)} />
            <button className="quantityButton" onClick={() => incrementQuantity(product)}>+</button>
            <button className="removeButton" onClick={() => onItemRemove(product)}>Remove</button>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="CartList">
        <div className="cartItemsContainer">
          {output.length > 0 ? output : <p className="emptyCartMessage">Your cart is empty.</p>}
          <p>Total: ${total.toFixed(2)}</p> {/* Display total */}
        </div>
        <div className="order1-photos">
          <img src={delivery1} alt="Delivery truck icon" />
        </div>
      </div>
    );
    
}
