"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function OrderItem(props) {
  const s = useStyles();
  const { id, model_name, price, product_type, manufacture } = props;

  const remove = (product) => {
    props.removeProduct(product);
  };

  return (
    <div className={s.root}>
      <header className={s.headline}>
        <h4 className={s.head}>{product_type}</h4>
        <p className={s.remove} onClick={() => remove({ ...props })}>
          Remove
        </p>
      </header>

      <section className={s.orderItem}>
        <div className={s.data}>
          <p>
            {manufacture} - {model_name}
          </p>

          <p className={s.price}>{price},-</p>
        </div>
      </section>
    </div>
  );
}

export default OrderItem;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 2,
    margin: "5px 5px 10px 5px",
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
