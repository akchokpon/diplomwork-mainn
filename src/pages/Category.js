import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";
import { useContext } from "react";
import { AppContext } from "../App";
import ProductList from "../components/ProductList/ProductList";
import "./Product.css";

export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const { categories } = useContext(AppContext);

  const category = categories.find(
    (category) => category.slug === params.slug
  );

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="Category">
      <h2>{category.name}</h2>
      <ProductList category={category} />
    </div>
  )
}