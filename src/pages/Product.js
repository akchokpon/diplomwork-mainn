import { useContext, useState } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../App";
import NotFound from "./NotFound";
import { AddToCart } from "../components/AddToCart/AddToCart";
import "./Product.css";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products, cart, setCart } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // Добавление товара в корзину с учетом выбранного количества
    const updatedCart = { ...cart };
    if (updatedCart[product.id]) {
      updatedCart[product.id].quantity += quantity;
    } else {
      updatedCart[product.id] = { ...product, quantity };
    }
    setCart(updatedCart);
  };

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="Product">
      <div>
        <img src={product.picture} alt={product.name} />
      </div>
      <div className="name_pr">
        <div className="pr_name">
          {product.name}
        </div>
        <div className="pr">
          <p><strong>Price:</strong>
            </p>
            <div className="price">{product.price}$</div>
            </div>
            <div className="pr">
          <p><strong>Description:</strong>
            </p>
            <div className="description">{product.description}$</div>
            </div>
        
        <div>
          <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </div>
        <AddToCart product={product} onClick={handleAddToCart} />
      </div>
    </div>
  )
}
