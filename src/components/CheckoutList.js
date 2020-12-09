"use-strict";
import React from "react";
import { makeStyles } from "@material-ui/core/";

function CheckoutList(props) {
  const s = useStyles();
  const {
    p_model_name,
    image,
    Manufacture,
    p_description,
    p_price,
  } = props.product;

  return (
    <div className={s.root}>
      <img
        alt="product"
        className={s.image}
        src={require(`../assets/productImages/${image}`)}
      />
      <div className={s.itemInfo}>
        <h3 className={s.headline}>
          {p_model_name} - {Manufacture.m_name}
        </h3>

        <div className={s.description}>
          <p>{p_description}</p>
        </div>

        <div className={s.price}>{p_price},-</div>
      </div>
    </div>
  );
}

export default CheckoutList;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 5,
    float: "left",
    width: "100%",
    borderBottom: "1px solid #CCC",
  },
  container: { background: "#CCC" },
  image: { width: "20%", float: "left" },
  itemInfo: {
    width: "76%",
    float: "left",
  },
  headline: { padding: 5 },
  description: {
    width: "98%",
    padding: "1%",
    float: "left",
  },
  price: {
    width: "100%",
    padding: "5px 3%",
    float: "left",
    textAlign: "right",
  },
}));
