import axios from "axios";
import React, { useState, useEffect } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown'

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
            <NavDropdown.Item key={category.toString()} href={`/category/${category}`}>{category}</NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
};

export default CategoryList;
