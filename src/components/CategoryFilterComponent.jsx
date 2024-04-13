import React from "react";

const CategoryFilterComponent = ({ products, selectedCategories, onCategoryChange }) => {
  const categories = [...new Set(products.map((item) => item.category))];

  const handleCheckboxChange = (e) => {
    const category = e.target.value;
    onCategoryChange(category);
  };

  return (
    <div className="dropdown col-2 m-2">
      {categories.map((category) => (
        <div className="form-check" key={category}>
          <input
            className="form-check-input"
            type="checkbox"
            value={category}
            id={category}
            checked={selectedCategories.includes(category)}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor={category}>
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilterComponent;
