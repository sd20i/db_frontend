"use-strict";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid } from "@material-ui/core/";
import CheckoutList from "../components/CheckoutList";
import { googleLogin } from "../firebase/firebaseAuth";
import updateCustomer from "../api/updateCustomer";
import placeNewOrder from "../api/createNewOrder";
import { useHistory } from "react-router-dom";

function Checkout(props) {
  const s = useStyles();
  const { productList, totalPrice, user, token } = props;

  return (
    <div className={s.root}>
      <Grid container>
        <LeftPanel user={user} token={token} />
        <RightPanel
          products={productList}
          totalPrice={totalPrice}
          customerId={user}
        />
      </Grid>
    </div>
  );
}

const LeftPanel = (props) => {
  const s = useStyles();
  const { user, token } = props;
  const [updatedUser, setUpdatedUser] = useState();
  const [msg, setMsg] = useState(null);

  const login = async () => {
    await googleLogin();
  };

  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  const updateUserData = (e) => {
    let updateInfo = { ...updatedUser };
    updateInfo[e.target.name] = e.target.value;
    setUpdatedUser(updateInfo);
  };

  const updateCustomerDetails = async () => {
    let status = await updateCustomer(updatedUser, token);
    setMsg(status.msg);
  };

  return (
    <Grid item md={6}>
      <div className={s.centerInfo}>
        <div className={s.container}>
          {!updatedUser && (
            <div>
              <h3 className={s.headline}>Sign in to complete order</h3>
              <div className={s.buttonCon}>
                <img
                  onClick={() => login()}
                  className={s.button}
                  src={require("../assets/google_button.png")}
                  alt="signin"
                />
              </div>
            </div>
          )}
          {updatedUser && (
            <div>
              <h3 className={s.headline}>Your details</h3>

              <div className={s.inputCon}>
                <p className={s.inputLabel}>Name</p>
                <input
                  type="text"
                  name="c_name"
                  disabled
                  value={updatedUser.c_name}
                  onChange={(e) => updateUserData(e)}
                  className={s.input}
                />
              </div>

              <div className={s.inputCon}>
                <p className={s.inputLabel}>Email</p>
                <input
                  type="email"
                  name="c_email"
                  disabled
                  value={updatedUser.c_email}
                  onChange={(e) => updateUserData(e)}
                  className={s.input}
                />
              </div>

              <div className={s.inputCon}>
                <p className={s.inputLabel}>Phone</p>
                <input
                  type="tel"
                  name="c_phone"
                  placeholder="Phone number"
                  value={updatedUser.c_phone || ""}
                  onChange={(e) => updateUserData(e)}
                  className={s.input}
                />
              </div>

              <div className={s.inputCon}>
                <p className={s.inputLabel}>Street</p>
                <input
                  type="text"
                  name="c_street"
                  placeholder="Street name"
                  value={updatedUser.c_street || ""}
                  onChange={(e) => updateUserData(e)}
                  className={s.input}
                />
              </div>

              <div className={s.inputCon}>
                <p className={s.inputLabel}>House number</p>
                <input
                  type="text"
                  name="c_number"
                  placeholder="House number"
                  value={updatedUser.c_number || ""}
                  onChange={(e) => updateUserData(e)}
                  className={s.input}
                />
              </div>

              <div className={s.inputCon}>
                <p className={s.inputLabel}>House number</p>
                <input
                  type="text"
                  name="c_floor"
                  placeholder="Floor"
                  value={updatedUser.c_floor || ""}
                  onChange={(e) => updateUserData(e)}
                  className={s.input}
                />
              </div>

              <div className={s.inputCon}>
                <p className={s.inputLabel}>Zip code</p>
                <input
                  type="text"
                  name="c_zip"
                  placeholder="Zip code"
                  value={updatedUser.c_zip || ""}
                  onChange={(e) => updateUserData(e)}
                  className={s.input}
                />
              </div>

              <div className={s.inputCon}>
                <p className={s.inputLabel}>City</p>
                <input
                  type="text"
                  name="c_city"
                  placeholder="City"
                  value={updatedUser.c_city || ""}
                  onChange={(e) => updateUserData(e)}
                  className={s.input}
                />
              </div>

              <div className={s.inputCon}>
                <p className={s.inputLabel}>Country</p>
                <input
                  type="text"
                  name="c_country"
                  placeholder="Country"
                  value={updatedUser.c_country || ""}
                  onChange={(e) => updateUserData(e)}
                  className={s.input}
                />
              </div>

              {msg !== null && (
                <div className={s.messageCon}>
                  <p className={s.message}>{msg}</p>
                </div>
              )}

              <div className={s.submitBtnCon}>
                <button
                  className={s.submitBtn}
                  onClick={() => updateCustomerDetails()}
                >
                  update informations
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Grid>
  );
};

const RightPanel = (props) => {
  const s = useStyles();
  const { products, totalPrice, customerId } = props;
  const history = useHistory();

  const placeOrder = async () => {
    console.log(customerId.c_id);
    let productsArray = [];
    await products.map((product) => {
      productsArray.push(product.p_id);
      return productsArray;
    });

    const orderStatus = await placeNewOrder(customerId.c_id, productsArray);
    console.log(orderStatus);
    if (orderStatus.status) {
      history.push({
        pathname: "/myorders",
        search: "?query=customerorderdetails",
        state: { order: productsArray },
      });
    }
    return null;
  };

  return (
    <Grid item md={6}>
      <div className={s.centerInfo}>
        <div className={s.container}>
          <h3 className={s.headline}>Products in basket</h3>
          {products.map((product) => {
            return <CheckoutList key={product.p_id} product={product} />;
          })}

          <p className={s.totalPrice}>{totalPrice},-</p>

          {customerId !== null && customerId.hasOwnProperty("c_id") && (
            <div className={s.submitBtnCon}>
              <button className={s.submitBtn} onClick={() => placeOrder()}>
                Buy car parts
              </button>
            </div>
          )}
        </div>
      </div>
    </Grid>
  );
};

export default Checkout;

const useStyles = makeStyles((theme) => ({
  root: { minHeight: "95vh", background: "#F8F8F8" },
  headline: { marginBottom: 15 },
  centerInfo: {
    width: "80%",
    margin: "20px auto 0px auto",
  },
  container: {
    width: "100%",
    float: "left",
    background: "#FFF",
    borderRadius: 5,
    padding: 15,
  },
  totalPrice: {
    width: "96%",
    padding: "30px 2% 10px 2%",
    fontWeight: "bold",
    fontSize: 20,
    float: "left",
    textAlign: "right",
  },
  buttonCon: { width: "100%", textAlign: "center" },
  button: {
    cursor: "pointer",
    margin: "50px auto",
    "&:hover": { opacity: 0.8 },
  },
  inputCon: { padding: "0px 10px 10px 10px" },
  input: { padding: 10, width: 400 },
  inputLabel: { fontWeight: "bold", fontSize: 13, padding: 5 },
  submitBtnCon: {
    width: 410,
    margin: 10,
    padding: "10px 0px 10px 10px",
    textAlign: "right",
  },
  submitBtn: {
    background: "#27ae60",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    borderRadius: 5,
    fontWeight: "bold",
    color: "#FFF",
  },
}));

Checkout.defaultProps = {
  productList: [],
};
Checkout.propTypes = {
  productList: PropTypes.array,
};
