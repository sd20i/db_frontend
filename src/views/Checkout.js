"use-strict";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid } from "@material-ui/core/";

function Checkout(props) {
  const s = useStyles();
  const { productList } = props;

  return (
    <div className={s.root}>
      <Grid container>
        <Left />
        <Right products={productList} />
      </Grid>
    </div>
  );
}

const Left = (props) => {
  const s = useStyles();
  return (
    <Grid item md={6}>
      <h3>customer data inputs</h3>
      <p>customer data inputs</p>
    </Grid>
  );
};

const Right = (props) => {
  const s = useStyles();
  const { products } = props;
  return (
    <Grid item md={6}>
      <h3>Products</h3>
      {products.map((product) => {
        return <p key={product.p_id}>{product.p_model_name}</p>;
      })}
    </Grid>
  );
};

export default Checkout;

const useStyles = makeStyles((theme) => ({
  root: { background: "#FFF" },
}));

Checkout.defaultProps = {
  productList: [],
};
Checkout.propTypes = {
  productList: PropTypes.array,
};
