import axios from "axios";
import React, { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/categories").then((json) =>
      setCategories(json.data)
    );
  }, []);

  return (
    <NavDropdown title="Categories" id="basic-nav-dropdown">
      {categories.map((category) => {
        return (
          <Link
            to={`/category/${category}`}
            data-rr-ui-dropdown-item="" class="dropdown-item"
            key={category.toString()}
          >
            {category}
          </Link>
        );
      })}
    </NavDropdown>
  );
};

export default CategoryList;
