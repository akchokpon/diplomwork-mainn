import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink" >
      <Link to="/cart" className="link">
        <button className="cartlink-button">
          <img alt="cart" src="https://magic-toys.kg/image/cache/catalog/revolution/demo_tovars/market/soc/shopping-cart-21x21.svg" className="cart" />
          <div>
            <span>Cart:</span> {total}
          </div>
        </button>
      </Link>
    </div>
  )
}