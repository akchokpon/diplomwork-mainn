import { useContext } from "react";
import "./HitProducts.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";

export default function HitProducts({ category }) {
  const { products } = useContext(AppContext);

  // Определяем количество товаров, которые вы хотите вывести
  const numberOfProductsToShow = 4;

  const output = products
    .slice(0, numberOfProductsToShow) // Используем метод slice для выборки нужного количества товаров
    .map(product => (
      <div key={product.id} className="product">
        <div className="hit">Bestseller</div>
        <Link to={'/products/' + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <hr />
        <Link to={"/products/" + product.slug} className="text">
          {product.name}
        </Link>

        <br />

        <span>${product.price}</span>
        <AddToCart product={product} />
      </div>
    ));

  return (
    <div className="HitProducts">
      <div className="container">
      <div className="header">
        <span>Bestsellers</span> <hr color="#b1cc19" />
      </div>
      <div className="hits">
        {output}
      </div>
      </div>
    </div>
  );
}
