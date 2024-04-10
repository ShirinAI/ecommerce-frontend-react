import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/admin/ProductService";
import { getFood } from "../../services/FoodService";
import { useNavigate, useParams } from "react-router-dom";
import { getRailing } from "../../services/RailingService";
import { getDrink } from "../../services/DrinkService";

const ViewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [flavour, setFlavour] = useState("");
  const [colour, setColour] = useState("");
  const [model, setModel] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProduct(id);
        setProduct(productData);
        console.log(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      if (product) {
        setName(product.name || "");
        setPrice(product.price || "");
        setImage(product.image || "");

        try {
          if (product.category === "food") {
            const food = await getFood(id);
            setExpiryDate(food.expiryDate || "");
          } else if (product.category === "drink") {
            const drink = await getDrink(id);
            setExpiryDate(drink.expiryDate || "");
            setFlavour(drink.flavour || "");
          } else if (product.category === "railing") {
            const railing = await getRailing(id);
            setColour(railing.colour || "");
            setModel(railing.model || "");
          }
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      }
    };

    fetchData();
  }, [product]);

  return (
    <div className="container">
      <h2>View Product</h2>
      <div>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Price:</strong> {price}
        </p>
        <p>
          <strong>Image:</strong> {image}
        </p>
        {product && (
          <>
            {(product.category === "food" || product.category === "drink") && (
              <p>
                <strong>Expiry Date:</strong> {expiryDate || "N/A"}
              </p>
            )}

            {product.category == "drink" && (
              <p>
                <strong>Flavour:</strong> {flavour}
              </p>
            )}
            {product.category == "railing" && (
              <>
                <p>
                  <strong>Colour:</strong> {colour}
                </p>
                <p>
                  <strong>Model:</strong> {model}
                </p>
              </>
            )}
          </>
        )}
      </div>
      <button className="btn btn-primary" onClick={() => navigate(`/admin/products/update/${id}`)}>
        Update
      </button>
    </div>
  );
};

export default ViewProduct;
