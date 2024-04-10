import React, { useState } from "react";
import { saveDrink } from "../../services/DrinkService";
import { useNavigate } from "react-router-dom";

const AddDrink = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [flavour, setFlavour] = useState("");
  const navigate = useNavigate();

  const saveOrUpdateDrink = (e) => {
    e.preventDefault();
    const drink = { name, price, image, expiryDate, flavour };
    saveDrink(drink)
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
              <h3 className="card-title text-center">Add Drink</h3>
              <form onSubmit={saveOrUpdateDrink}>
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
                <div className="mb-3">
                  <label htmlFor="flavour" className="form-label">
                    Flavour
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="flavour"
                    value={flavour}
                    onChange={(e) => setFlavour(e.target.value)}
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

export default AddDrink;
