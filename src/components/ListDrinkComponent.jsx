import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { listDrinks } from "../services/DrinkService";
//rafce

const ListDrinkComponent = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    listDrinks()
      .then((response) => {
        setDrinks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {drinks.map((item) => (
        <Card
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
              <br />
              Flavour: {item.flavour}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListDrinkComponent;
