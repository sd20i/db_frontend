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
    background: "#ACA",
    float: "left",
  },
}));

/*OrderListContainer.defaultProps = {};
OrderListContainer.propTypes = {};*/
