import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { listProducts } from "../services/admin/ProductService";

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

  const handleCategoryChange = (e) => {
    const category = e.target.value;
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
        <input
          className="m-2"
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <div className="dropdown col-2 m-2">
          {[...new Set(products.map((item) => item.category))].map((category) => (
            <div className="form-check" key={category}>
              <input
                className="form-check-input"
                type="checkbox"
                value={category}
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              <label className="form-check-label" htmlFor={category}>
                {category}
              </label>
            </div>
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-start col-10">
          {filteredProducts.map((item) => (
            <Card
              className="m-2"
              key={item.id}
              style={{ width: "12rem", border: "1px solid #ddd", borderRadius: "5px" }}
            >
              <Card.Img
                variant="top"
                src={item.image}
                style={{ maxWidth: "100%", height: "auto" }}
                alt={item.image}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Price: ${item.price}
                  {item.flavour && (
                    <p>
                      <br />
                      Flavour: {item.flavour}
                    </p>
                  )}
                  {item.colour && (
                    <p>
                      <br />
                      Colour: {item.colour}
                    </p>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProductClientComponent;
