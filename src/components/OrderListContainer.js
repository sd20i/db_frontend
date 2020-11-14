"use-strict";
import React, { useState } from "react";
import PropTypes from "prop-types";
import OrderItem from "./OrderItem";
import { makeStyles } from "@material-ui/core/";

function OrderListContainer(props) {
  const s = useStyles();
  const [price] = useState(0);
  const { carParts } = props;

  const remove = (product) => {
    props.removeProduct(product);
  };

  return (
    <div className={s.root}>
      <h3 className={s.headline}>Order list</h3>

      <div className={s.orderlist}>
        {carParts.map((carPart) => {
          return (
            <OrderItem
              key={carPart.product_id}
              id={carPart.product_id}
              model_name={carPart.product_model_name}
              price={carPart.product_price}
              product_type={carPart.product_type_name}
              manufacture={carPart.manufacture_name}
              removeProduct={(product) => remove(product)}
            />
          );
        })}
      </div>

      <div className={s.totalprice}>
        <h3>Total: {price} ,-</h3>
      </div>
    </div>
  );
}

export default OrderListContainer;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "25vw",
    height: "94vh",
    float: "left",
    background: "#F8f8f8",
  },
  headline: {
    width: "100%",
    height: "5vh",
    textAlign: "center",
    paddingTop: "2vh",
    background: "#FFF",
    borderBottom: "1px solid #BBB",
  },
  orderlist: {
    overflow: "scroll",
    height: "80vh",
  },
  totalprice: {
    padding: "1vh",
  },
}));

OrderListContainer.defaultProps = {};
OrderListContainer.propTypes = {
  carParts: PropTypes.array,
};
