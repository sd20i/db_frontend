import React from "react";

const ProductView = (props) => {
  const { viewName } = props;
  return (
    <div>
      <p>{viewName}</p>
    </div>
  );
};

export default ProductView;
