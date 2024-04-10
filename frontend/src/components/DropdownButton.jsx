import React, { useState } from "react";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked ${item}`);
    // Do something with the selected item
    // For example, close the dropdown
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" onClick={toggleDropdown}>
        Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button className="dropdown-item" onClick={() => handleItemClick("Item 1")}>
            Item 1
          </button>
          <button className="dropdown-item" onClick={() => handleItemClick("Item 2")}>
            Item 2
          </button>
          <button className="dropdown-item" onClick={() => handleItemClick("Item 3")}>
            Item 3
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
