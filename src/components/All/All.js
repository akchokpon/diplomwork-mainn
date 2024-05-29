import "./All.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import AddProduct from "../../components/AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function All({ sellers }) {
  const { products } = useContext(AppContext);
  const output = products
    .filter((product) => product.all === true)
    .map((product) => (
      <div key={product.id} className="product">
        <Link to={"/products/" + product.id}>
          {/* Используем идентификатор продукта вместо slug */}
          <img src={product.picture} alt={product.name} />
        </Link>
        <hr />
        <Link to={"/products/" + product.id} className="text">
          {/* Используем идентификатор продукта вместо slug */}
          {product.name}
        </Link>
        <br />
        <div className="actions">
          <span>${product.price}</span>
          <AddToCart product={product} />
        </div>
        <DeleteProduct product={product} />
      </div>
    ));

  return (
    <div className="BestSellerContent flex">
      <div className="tit">Our all products</div>
      <div className="ProductList container">
        <AddProduct sellers={sellers} />
        {output}
      </div>
    </div>
  );
}
