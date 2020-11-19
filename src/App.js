"use-strict";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import OrderListContainer from "./components/OrderListContainer";
import ProductContainer from "./components/ProductContainer";
import { makeStyles } from "@material-ui/core/";

function App(props) {
  const s = useStyles();
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateList = async (newList) => {
    await updatePrice(newList);
    setProductList(newList);
  };

  // adding product to product list
  const addProduct = async (product) => {
    let productListCopy = [...productList];
    var result = await productListCopy.filter((obj) => {
      return obj.product_type_fk === product.product_type_fk;
    });
    if (result.length === 0) {
      productListCopy.push(product);
    }
    updateList(productListCopy);
  };

  // removing product from product list
  const removeProduct = async (product) => {
    let productListCopy = [...productList];

    var result = await productListCopy.filter((obj) => {
      return obj.p_id === product.p_id;
    });

    if (result.length !== 0) {
      const index = await productListCopy.findIndex(
        (obj) => obj.p_id === result[0].p_id
      );
      productListCopy.splice(index, 1);
      updateList(productListCopy);
    }
  };

  const updatePrice = (newList) => {
    let priceNew = 0;
    newList.map((price) => {
      return (priceNew = price.p_price + priceNew);
    });
    setTotalPrice(priceNew.toFixed(2));
  };

  return (
    <div className={s.root}>
      <Header />
      <ProductContainer addproductToList={(product) => addProduct(product)} />
      <OrderListContainer
        productList={productList}
        removeProduct={(product) => removeProduct(product)}
        totalPrice={totalPrice}
      />
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
