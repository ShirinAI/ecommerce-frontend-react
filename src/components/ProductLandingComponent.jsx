import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/admin/ProductService";
import { Card } from "react-bootstrap";
import AddToShoppingCartButton from "./AddToShoppingCartButton";

const ProductLandingComponent = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(id);
        setProduct(productData);

        console.log(productData.image);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src={product.image} alt={product.name} className="card-img-top" />
          </div>
        </div>
        <div className="card-body col-md-6">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text mb-2">Price: ${product.price}</p>
          {product.flavour && <p className="card-text mb-2">Flavour: {product.flavour}</p>}
          {product.colour && <p className="card-text mb-2">Colour: {product.colour}</p>}
          {product.expiryDate && (
            <p className="card-text mb-2">Expiry Date: {product.expiryDate}</p>
          )}
          <AddToShoppingCartButton itemId={product.id} />
          <div>
            <br />
            <h4>Description</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium lorem eget
              purus vulputate, ut bibendum libero consectetur. Nulla convallis, lorem et tempus
              congue, sem velit vestibulum mauris, at volutpat nulla risus sed nisi. Vestibulum vel
              leo quis eros auctor tristique nec a velit.
            </p>
            <p>
              Integer nec felis id enim rutrum volutpat eget sit amet velit. Cras hendrerit urna in
              enim tempus, ac luctus sapien interdum. Fusce fringilla, neque vel malesuada
              facilisis, mauris elit vestibulum est, eu dictum eros nunc et mi. Pellentesque eu
              lectus vel nunc pharetra tincidunt sed vitae nunc. Ut at nisi orci. Nam accumsan ex ac
              dui egestas, at dictum magna dictum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLandingComponent;
