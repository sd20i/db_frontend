"use-strict";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import OrderListContainer from "./components/OrderListContainer";
import ProductContainer from "./components/ProductContainer";
import { makeStyles } from "@material-ui/core/";
import SplashScreen from "./views/SplashScreen";
import Checkout from "./views/Checkout";
import Recipt from "./views/Receipt";
import { firebase } from "./firebase/firebaseConfig";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import signIn from "./api/signIn";

function App(props) {
  const s = useStyles();
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  const updateList = async (newList) => {
    await updatePrice(newList);
    setProductList(newList);
  };

  const signInUser = async (idToken) => {
    const user = await signIn(idToken);
    setUser(user);
    setToken(idToken);
  };

  useEffect(() => {
    if (firebase.apps.length) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(function (idToken) {
              signInUser(idToken);
              console.log(idToken);
              return idToken;
            });
        }
      });
    }
  }, []);

  // adding product to product list
  const addProduct = async (product, productType) => {
    let productListCopy = [...productList];
    var result = await productListCopy.filter((obj) => {
      return obj.product_type_fk === product.product_type_fk;
    });
    if (result.length === 0) {
      product.product_type = productType;
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
    let formatted = priceNew
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setTotalPrice(formatted);
  };

  return (
    <div className={s.root}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/shop">
            <ProductContainer
              addproductToList={(product, productType) =>
                addProduct(product, productType)
              }
            />
            <OrderListContainer
              productList={productList}
              removeProduct={(product) => removeProduct(product)}
              totalPrice={totalPrice}
            />
          </Route>
          <Route path="/checkout">
            <Checkout
              productList={productList}
              totalPrice={totalPrice}
              user={user}
              token={token}
            />
          </Route>

          <Route path="/myorders">
            <Recipt user={user} token={token} />
          </Route>

          <Route path="/">
            <SplashScreen />
          </Route>
        </Switch>
      </Router>
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
