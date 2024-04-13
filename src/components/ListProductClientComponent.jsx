import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { listProducts } from "../services/admin/ProductService";
import ProductCardComponent from "./ProductCardComponent";

const ListProductClientComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex m-2">
      <div className="d-flex justify-content-between m-2">
        <h2>Browse products</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-start col-12">
        {products.map((item) => (
          <ProductCardComponent key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ListProductClientComponent;
