import React, { useEffect, useContext, useState, useRef } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../App";
import ProductItem from "../ProductItem/ProductItem";
import "./Search.css";

const Search = () => {
  const { products } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (!value.trim()) {
      setSearchResults([]);
    } else {
        const filteredProducts = products.filter((product) => {
            // Преобразуем имя продукта и значение поиска в нижний регистр для нерегистрозависимого сравнения
            const productNameLowerCase = product.name.toLowerCase();
            const searchValueLowerCase = value.toLowerCase();
          
            // Проверяем, включает ли имя продукта в себя значение поиска
            return productNameLowerCase.includes(searchValueLowerCase);
          });
          
      setSearchResults(filteredProducts.slice(0, 5));
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  const handleLinkClick = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="Search" ref={searchRef}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <span>
        <i className="fa-solid fa-magnifying-glass searcher"></i>
      </span>
      {searchTerm && searchResults.length === 0 && (
        <div className="NoResults">No results found</div>
      )}
      <div className="SearchResults">
        {searchResults.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onLinkClick={handleLinkClick}
          />
        ))}
      </div>
    </div>
  );
};

Search.propTypes = {
  products: PropTypes.array.isRequired, // Assuming products is an array
};

export default Search;
