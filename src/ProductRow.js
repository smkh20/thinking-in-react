import React from "react";

const ProductRow = (props) => {
  return (
    <>
      <p style={{ color: !props.product.stocked && "red" }}>{props.product.name}</p>
      <p>{props.product.price}</p>
    </>
  );
};

export default ProductRow;
