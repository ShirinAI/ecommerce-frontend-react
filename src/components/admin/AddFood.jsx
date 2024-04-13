import React, { useState } from "react";
import { saveFood } from "../../services/FoodService";
import { useNavigate } from "react-router-dom";

export const AddFood = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const navigate = useNavigate();

  const saveOrUpdateFood = (e) => {
    e.preventDefault();
    const food = { name, price, image, expiryDate };
    saveFood(food)
      .then((response) => {
        console.log(response.data);
        navigate("/admin/products");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Add Food</h3>
              <form onSubmit={saveOrUpdateFood}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image Path
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryDate" className="form-label">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddFood;
