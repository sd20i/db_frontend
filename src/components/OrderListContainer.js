"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function OrderListContainer(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <p>orderlist</p>
    </div>
  );
}

export default OrderListContainer;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "25vw",
    height: "95vh",
    float: "left",
    background: "#f5f5f5",
  },
}));

/*OrderListContainer.defaultProps = {};
OrderListContainer.propTypes = {};*/
