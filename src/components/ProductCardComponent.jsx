import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddToShoppingCartButton from "./AddToShoppingCartButton";

const ProductCardComponent = ({ product }) => {
  return (
    <Card
      className="m-2"
      style={{
        width: "12rem",
        border: "1px solid #ddd",
        borderRadius: "5px",
        textDecoration: "none",
      }}
    >
      {" "}
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ objectFit: "cover", width: "100%", height: "180px" }}
          alt={product.image}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{product.name}</Card.Title>
          <Card.Text style={{ color: "black" }}>
            Price: ${product.price}
            {product.flavour && (
              <p>
                <br />
                Flavour: {product.flavour}
              </p>
            )}
            {product.colour && (
              <p>
                <br />
                Colour: {product.colour}
              </p>
            )}
          </Card.Text>
        </Card.Body>{" "}
      </Link>{" "}
      <AddToShoppingCartButton itemId={product.id} />
    </Card>
  );
};

export default ProductCardComponent;
