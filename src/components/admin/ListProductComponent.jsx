import React, { useState, useEffect } from "react";
import { listProducts } from "../../services/admin/ProductService";
import { Link, useNavigate } from "react-router-dom";
import { deleteDrink } from "../../services/DrinkService";
import { deleteRailing } from "../../services/RailingService";
import { deleteFood } from "../../services/FoodService";
import { isAdminUser } from "../../services/AuthService";

const ListProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const isAdmin = isAdminUser();

  useEffect(() => {
    listProducts()
      .then((response) => {
        setProducts(response.data);
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    sortProducts("id");
  }, [products]);

  const sortProducts = (criteria) => {
    let sortedProducts = [...products];
    switch (criteria) {
      case "expiryDate":
        sortedProducts.sort((a, b) => a.expiryDate.localeCompare(b.expiryDate));
        break;
      case "name":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "category":
        sortedProducts = sortedProducts.filter(
          (product) => product.category !== undefined && product.category !== null
        );
        sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case "id":
        sortedProducts.sort((a, b) => a.id - b.id); // Sort by ID
        break;
      default:
        break;
    }
    setSearchResults(sortedProducts);
  };

  function addNewProduct() {
    navigate("/admin/products/add");
    console.log("click");
  }

  const handleDelete = (id, category) => {
    switch (category) {
      case "drink":
        deleteDrink(id)
          .then(() => {
            setProducts(products.filter((product) => product.id !== id));
            console.log("Product deleted successfully.");
            navigate("/admin/products");
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
        break;
      case "food":
        deleteFood(id)
          .then(() => {
            setProducts(products.filter((product) => product.id !== id));
            console.log("Product deleted successfully.");
            navigate("/admin/products");
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
        break;
      case "railing":
        deleteRailing(id)
          .then(() => {
            setProducts(products.filter((product) => product.id !== id));
            console.log("Product deleted successfully.");
            navigate("/admin/products");
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
        break;
      default:
        console.error("Invalid category:", category);
    }
  };

  function handleUpdateProduct(id) {
    console.log(id);
    navigate(`/admin/products/update/${id}`);
  }

  function handleViewProduct(id) {
    console.log(id);
    navigate(`/admin/products/view/${id}`);
  }

  const handleSearch = () => {
    const results = products.filter((product) => {
      const { id, name, price } = product;
      const searchTermLowerCase = searchTerm.toLowerCase();
      return (
        id.toString().includes(searchTermLowerCase) ||
        (typeof name === "string" && name.toLowerCase().includes(searchTermLowerCase)) ||
        (typeof price === "string" && price.toLowerCase().includes(searchTermLowerCase))
      );
    });
    setSearchResults(results);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults(products);
  };

  return (
    <div className="container">
      <h2 className="text-center">List of products</h2>
      <div>
        <div className="d-flex justify-content-between">
          <div className="mb-3">
            <button className="btn btn-primary" onClick={addNewProduct}>
              Add product
            </button>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between m-2">
              {" "}
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
              <button className="btn btn-secondary" onClick={handleClearSearch}>
                Clear
              </button>
            </div>
            <div>
              <button className="btn btn-outline-secondary me-2" onClick={() => sortProducts("id")}>
                Sort by ID
              </button>
              <button
                className="btn btn-outline-secondary me-2"
                onClick={() => sortProducts("name")}
              >
                Sort by Name
              </button>
              <button
                className="btn btn-outline-secondary me-2"
                onClick={() => sortProducts("category")}
              >
                Sort by Category
              </button>
            </div>
          </div>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Product Type</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.image}
                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-primary m-1"
                    onClick={() => handleUpdateProduct(product.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-info m-1"
                    onClick={() => handleViewProduct(product.id)}
                  >
                    View
                  </button>

                  <a
                    href="#"
                    className="btn btn-danger m-1"
                    onClick={() => handleDelete(product.id, product.category)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProductComponent;
