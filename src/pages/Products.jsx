import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { listProducts } from "../services/admin/ProductService";
import ProductSearchComponent from "../components/ProductSearchComponent";
import CategoryFilterComponent from "../components/CategoryFilterComponent";
import ProductCardComponent from "../components/ProductCardComponent";

const ListProductClientComponent = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    listProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((product) => {
      if (selectedCategories.length === 0) return true;
      return selectedCategories.includes(product.category);
    });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((prevCategory) => prevCategory !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  return (
    <div className="flex m-2">
      <div className="d-flex justify-content-between m-2">
        <h2>Browse products</h2>
        <ProductSearchComponent searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </div>
      <div className="d-flex justify-content-between m-2">
        <CategoryFilterComponent
          products={products}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
        <div className="d-flex flex-wrap justify-content-start col-10">
          {filteredProducts.map((item) => (
            <ProductCardComponent key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProductClientComponent;
