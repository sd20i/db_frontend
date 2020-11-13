"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function ProductContainer(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <p>products</p>
    </div>
  );
}

export default ProductContainer;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75vw",
    height: "95vh",
    float: "left",
    background: "#FFF",
  },
}));

/*ProductContainer.defaultProps = {};
ProductContainer.propTypes = {};*/
