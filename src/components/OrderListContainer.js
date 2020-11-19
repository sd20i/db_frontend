"use-strict";
import React from "react";
import PropTypes from "prop-types";
import OrderItem from "./OrderItem";
import { makeStyles } from "@material-ui/core/";

function OrderListContainer(props) {
  const s = useStyles();

  const { productList, totalPrice } = props;

  const remove = (product) => {
    return props.removeProduct(product);
  };

  return (
    <div className={s.root}>
      <h3 className={s.headline}>Order list</h3>

      <div className={s.orderlist}>
        {productList.map((carPart) => {
          return (
            <OrderItem
              key={carPart.p_id}
              product={carPart}
              removeProduct={(product) => remove(product)}
              productType={carPart.product_type}
            />
          );
        })}
        {productList.length === 0 && (
          <h4 className={s.emptyMsg}>Product list is empty</h4>
        )}
      </div>
      <div className={s.totalprice}>
        <h3>Total: {totalPrice} ,-</h3>
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
    background: "#FFF",
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
  emptyMsg: {
    width: "100%",
    color: "#757575",
    paddingTop: 50,
    textAlign: "center",
  },
}));

OrderListContainer.defaultProps = {};
OrderListContainer.propTypes = {
  carParts: PropTypes.array,
};
