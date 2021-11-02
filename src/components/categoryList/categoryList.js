import React, { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const docs = [];
      const items = await getDocs(collection(db, "categories"));
      items.forEach((document) => {
        docs.push(document.id);
      });
      setCategories(docs);
    };
    requestData();
  }, []);

  return (
    <NavDropdown title="Categories" id="basic-nav-dropdown">
      {categories.map((category) => {
        return (
          <Link
            to={`/category/${category}`}
            data-rr-ui-dropdown-item=""
            className="dropdown-item"
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
