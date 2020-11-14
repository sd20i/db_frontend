"use-strict";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function ProductContainer(props) {
  const s = useStyles();
  const { products } = props;

  return (
    <div className={s.root}>
      {products.map((product, index) => {
        return (
          <p className={s.productThing} key={index}>
            {product}
          </p>
        );
      })}
    </div>
  );
}

export default ProductContainer;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75vw",
    height: "95vh",
    float: "left",
    overflow: "scroll",
    background: "#FFF",
  },
  productThing: {
    width: "100%",
    height: "100%",

    padding: 10,
    background: "#DED",
  },
}));

ProductContainer.defaultProps = {
  products: [1],
};
ProductContainer.propTypes = {
  products: PropTypes.array,
};
