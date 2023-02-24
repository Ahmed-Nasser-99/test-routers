import React from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  return <h1>Product Number {id}</h1>;
};

export default Product;
