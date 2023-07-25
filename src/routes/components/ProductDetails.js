import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{JSON.stringify(params)}</h2>
    </div>
  );
};

export default ProductDetails;
