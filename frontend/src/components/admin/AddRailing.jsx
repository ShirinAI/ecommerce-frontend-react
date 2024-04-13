import React, { useState } from "react";
import { saveRailing } from "../../services/RailingService";
import { useNavigate } from "react-router-dom";

const AddRailing = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [colour, setColour] = useState("");
  const [model, setModel] = useState("");
  const navigate = useNavigate();

  const saveOrUpdateRailing = (e) => {
    e.preventDefault();
    const railing = { name, price, image, colour, model };
    saveRailing(railing)
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
              <h3 className="card-title text-center">Add Railing</h3>
              <form onSubmit={saveOrUpdateRailing}>
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
                    Colour
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="colour"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryDate" className="form-label">
                    Model Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
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
export default AddRailing;
