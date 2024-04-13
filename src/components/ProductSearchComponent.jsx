import React from "react";

const ProductSearchComponent = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="m-2 d-flex justify-content-end">
      <input
        className="m-2"
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default ProductSearchComponent;
