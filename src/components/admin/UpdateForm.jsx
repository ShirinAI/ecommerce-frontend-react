import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/admin/ProductService";
import { getFood, updateFood } from "../../services/FoodService";
import { useNavigate, useParams } from "react-router-dom";
import { getRailing, updateRailing } from "../../services/RailingService";
import { getDrink, updateDrink } from "../../services/DrinkService";

const UpdateForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [flavour, setFlavour] = useState("");
  const [colour, setColour] = useState("");
  const [model, setModel] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  const navigate = useNavigate();
  const { id } = useParams();
  const [updateItem, setUpdateProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProduct(id);
        setUpdateProduct(productData);
        console.log(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      if (updateItem) {
        setName(updateItem.name || "");
        setPrice(updateItem.price || "");
        setImage(updateItem.image || "");

        try {
          if (updateItem.category === "food") {
            const food = await getFood(id);
            setExpiryDate(food.expiryDate || "");
          } else if (updateItem.category === "drink") {
            const drink = await getDrink(id);
            setExpiryDate(drink.expiryDate || "");
            setFlavour(drink.flavour || "");
          } else if (updateItem.category === "railing") {
            const railing = await getRailing(id);
            console.log("railing", railing);
            setColour(railing.colour || "");
            setModel(railing.model || "");
          }
        } catch (error) {
          console.error("Error fetching product data:", error);
        } finally {
          setLoading(false); // Set loading to false when all data is fetched
        }
      }
    };

    fetchData(); // Call the fetchData function
  }, [updateItem]);

  function handleSubmit(e) {
    e.preventDefault();
    const category = updateItem ? updateItem.category : "";
    if (category === "food") {
      let updatedItem = { name, price, image, expiryDate };
      updateFood(id, updatedItem)
        .then(() => {
          navigate("/admin/products");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (category === "drink") {
      let updatedItem = { name, price, image, category, expiryDate, flavour };
      updateDrink(id, updatedItem)
        .then(() => {
          navigate("/admin/products");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (category === "railing") {
      let updatedItem = { name, price, image, category, colour, model };
      console.log(updatedItem);
      updateRailing(id, updatedItem)
        .then(() => {
          navigate("/admin/products");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("Invalid category:", category);
    }
  }

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while data is being fetched
  }

  return (
    <div className="container">
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {updateItem && (
          <>
            {(updateItem.category === "food" || updateItem.category === "drink") && (
              <div className="mb-3">
                <label className="form-label">Expiry Date:</label>
                <input
                  type="text"
                  className="form-control"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
            )}
            {updateItem.category == "drink" && (
              <div className="mb-3">
                <label className="form-label">Flavour:</label>
                <input
                  type="text"
                  className="form-control"
                  value={flavour}
                  onChange={(e) => setFlavour(e.target.value)}
                />
              </div>
            )}
            {updateItem.category === "railing" && (
              <>
                <div className="mb-3">
                  <label className="form-label">Colour:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Model:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>
              </>
            )}
          </>
        )}
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
