import React from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const data = useOutletContext();
  //   console.log("🚀 ~ file: ProductDetails.js:7 ~ data:", data);
  const location = useLocation();
  console.log("🚀 ~ file: ProductDetails.js:9 ~ location:", location);

  return (
    <div>
      <h1>Product Details</h1>
      <h2>useParams</h2>
      <h3>{JSON.stringify(params)}</h3>
      <h2>useOutletContext</h2>
      <h3>{JSON.stringify(data.find((item) => item.id == params.id))}</h3>
      <h2>useLocation</h2>
      <h3>{JSON.stringify(location.state)}</h3>
    </div>
  );
};

export default ProductDetails;
