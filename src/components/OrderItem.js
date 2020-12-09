"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function OrderItem(props) {
  const s = useStyles();
  const { product, productType } = props;

  const remove = (product) => {
    props.removeProduct(product);
  };

  return (
    <div className={s.root}>
      <header className={s.headline}>
        <h4 className={s.head}>{productType}</h4>
        <p className={s.remove} onClick={() => remove(product)}>
          Remove
        </p>
      </header>

      <section className={s.orderItem}>
        <div className={s.data}>
          <p>
            {product.Manufacture.m_name} - {product.p_model_name}
          </p>

          <p className={s.price}>{product.p_price} ,-</p>
        </div>
      </section>
    </div>
  );
}

export default OrderItem;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 2,
    marginBottom: 5,
    borderBottom: "1px solid #0f0f0f",
    background: "#FFF",
  },
  headline: {
    width: "96%",
    padding: "2%",
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #EEE",
  },
  head: { width: "50%" },
  remove: {
    width: "50%",
    textAlign: "right",
    marginRight: 10,
    color: "#3498db",
    cursor: "pointer",
  },
  orderItem: { display: "flex", flexDirection: "row" },
  data: { width: "96%", padding: "2%" },
  price: { fontWeight: "bold", textAlign: "right", padding: "5px 10px" },
}));

/*OrderItem.defaultProps = {};
OrderItem.propTypes = {};*/

/*
<p>{model_name}</p>
<p>{price}</p>
<p>{product_type}</p>
<p>{manufacture}</p>
*/
