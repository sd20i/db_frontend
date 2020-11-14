"use-strict";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import OrderListContainer from "./components/OrderListContainer";
import ProductContainer from "./components/ProductContainer";
import { makeStyles } from "@material-ui/core/";

function App(props) {
  const s = useStyles();
  const [car, setCar] = useState([]);

  useEffect(() => {
    setCar(carTesting);
  }, []);

  const addProduct = (product) => {
    let products = [...car];
    products.push(product);
    setCar(products);
  };

  const removeProduct = (product) => {
    let products = [...car];

    var index = products.findIndex(function (o) {
      return o.product_id === product.id;
    });

    if (index !== -1) {
      products.splice(index, 1);
      setCar(products);
    }

    return null;
  };

  return (
    <div className={s.root}>
      <Header />
      <ProductContainer products={[1, 2, 3, 4, 5, 6, 7]} />
      <OrderListContainer
        carParts={car}
        removeProduct={(product) => removeProduct(product)}
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

const carTesting = [
  {
    product_id: 1,
    product_model_name: "Sedan",
    product_price: 5000.0,
    product_type_name: "Car Body",
    manufacture_name: "Nissan",
  },
  {
    product_id: 33,
    product_model_name: "V8",
    product_price: 9299.5,
    product_type_name: "Engine",
    manufacture_name: "Yamaha",
  },
  {
    product_id: 23,
    product_model_name: "Winder tires",
    product_price: 240.5,
    product_type_name: "Tires",
    manufacture_name: "Goodyear",
  },
  {
    product_id: 2,
    product_model_name: "Tinted",
    product_price: 240.5,
    product_type_name: "Windows",
    manufacture_name: "Glassman",
  },
  {
    product_id: 12,
    product_model_name: "Sedan",
    product_price: 5000.0,
    product_type_name: "Car Body",
    manufacture_name: "Nissan",
  },
  {
    product_id: 332,
    product_model_name: "V8",
    product_price: 9299.5,
    product_type_name: "Engine",
    manufacture_name: "Yamaha",
  },
];
