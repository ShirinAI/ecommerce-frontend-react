import React, { useState } from "react";
import AddDrink from "./AddDrink";
import AddFood from "./AddFood";
import AddRailing from "./AddRailing";
import { isAdminUser } from "../../services/AuthService";

const ProductComponent = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const handleSelect = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleSelect("drink")}
          className={`btn ${
            selectedComponent === "drink" ? "btn-primary" : "btn-outline-primary"
          } me-2 mt-3`}
        >
          Add Drink
        </button>
        <button
          onClick={() => handleSelect("food")}
          className={`btn ${
            selectedComponent === "food" ? "btn-primary" : "btn-outline-primary"
          } me-2 mt-3`}
        >
          Add Food
        </button>
        <button
          onClick={() => handleSelect("railing")}
          className={`btn ${
            selectedComponent === "railing" ? "btn-primary" : "btn-outline-primary"
          } me-2 mt-3`}
        >
          Add Railing
        </button>
      </div>
      <div>
        {selectedComponent === "drink" && <AddDrink />}
        {selectedComponent === "food" && <AddFood />}
        {selectedComponent === "railing" && <AddRailing />}
      </div>
    </div>
  );
};

export default ProductComponent;
