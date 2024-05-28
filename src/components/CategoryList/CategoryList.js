import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const output = categories.map((category) => (
    <li key={category.id} className="card">
      <NavLink to={"/categories/" + category.slug}>
        <div className="card-content">
          <h3 className="card-title">{category.name}</h3>
          {/* Добавляем изображение категории */}
         
          <DeleteCategory category={category} />
        </div>
      </NavLink>
    </li>
  ));

  return (
    <div className={`CategoryList ${isOpen ? "open" : ""}`}>
      <ul className="dropdownContent">{output}</ul>
      <AddCategory />
    </div>
  );
}
