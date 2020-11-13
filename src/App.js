"use-strict";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import OrderListContainer from "./components/OrderListContainer";
import ProductContainer from "./components/ProductContainer";
import { makeStyles } from "@material-ui/core/";

function App(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <Header />
      <ProductContainer />
      <OrderListContainer />
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    maxHeight: "100vh",
    background: "#CCC",
  },
}));
