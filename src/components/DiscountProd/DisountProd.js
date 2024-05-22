import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./DiscountProd.css";

export default function DiscountProd() {
  const { products } = useContext(AppContext);

  const output = products
    .map(product => (
      <div key={product.id} className="product">
      <div className="discount">-30%</div>
        <Link to={'/products/' + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <hr />
        <Link to={"/products/" + product.slug} className="text">
          {product.name}
        </Link>

        <br />

      </div>
    ))

    const random = Math.floor(Math.random() * products.length)

  return (
    <div className="DiscountProd">
      <h3>
        Random discount
      </h3>
      {output[random]}
    </div>
  )
}