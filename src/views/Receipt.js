"use-strict";
import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import getOrderByCustomer from "../api/getOrderByCustomer";
import { useHistory } from "react-router-dom";

function Recipt(props) {
  const s = useStyles();
  const { user } = props;
  const [customer, setCustomer] = useState({});
  const [customerOrder, setCustomerOrder] = useState({
    OrderItems: [],
  });
  const history = useHistory();

  useEffect(() => {
    if (user !== null) {
      setCustomer(user);
      fetchOrder(user.c_id);
    }
  }, [user]);

  const fetchOrder = async (customerId) => {
    const orderData = await getOrderByCustomer(customerId);
    setCustomerOrder(orderData.data.data);
  };

  const startOver = () => {
    history.push("/");
  };
  return (
    <div className={s.root}>
      <Grid container>
        <Grid item md={3} />
        <Grid item xs={12} md={6} className={s.reciptCon}>
          <div className={s.recipt}>
            <h3>Recipt</h3>
            <div className={s.customerInfoCon}>
              <div className={s.customerInfo}>
                <p className={s.infoLable}>Name:</p>
                <p className={s.infoValue}>{customer.c_name}</p>
              </div>
              <div className={s.customerInfo}>
                <p className={s.infoLable}>Email:</p>
                <p className={s.infoValue}>{customer.c_email}</p>
              </div>
              <div className={s.customerInfo}>
                <p className={s.infoLable}>Phone:</p>
                <p className={s.infoValue}>{customer.c_phone}</p>
              </div>
              <div className={s.customerInfo}>
                <p className={s.infoLable}>Delivery:</p>
                <p className={s.infoValue}>
                  {customer.c_street} {customer.c_number}
                </p>
              </div>
              <div className={s.customerInfo}>
                <p className={s.infoLable}></p>
                <p className={s.infoValue}>
                  {customer.c_zip} {customer.c_city}
                </p>
              </div>
              <div className={s.customerInfo}>
                <p className={s.infoLable}></p>
                <p className={s.infoValue}>{customer.c_country}</p>
              </div>
            </div>
            <div className={s.productCon}>
              <p className={s.productName}>
                Tracking: {customerOrder.o_tracking_number}
              </p>
            </div>
            <div>
              {customerOrder.OrderItems.map((product, i) => {
                return (
                  <div className={s.productCon} key={product.Product.p_id}>
                    <p className={s.productName}>
                      {`${product.Product.Manufacture.m_name} - ${product.Product.p_model_name}`}
                    </p>
                    <p className={s.productPrice}>
                      {product.Product.p_price
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      ,-
                    </p>
                  </div>
                );
              })}
            </div>

            <div className={s.buttonCon}>
              <button className={s.button} onClick={() => startOver()}>
                Buy more stuff
              </button>
            </div>
          </div>
        </Grid>
        <Grid item md={3} />
      </Grid>
    </div>
  );
}

export default Recipt;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    minHeight: "100vh",
    background: "#f8f8f8",
  },
  reciptCon: {
    marginTop: 50,
    padding: 10,
  },
  recipt: { background: "#FFF", padding: 10, borderRadius: 5 },
  item: { background: "#00F", width: "100%" },
  productCon: {
    width: "96%",
    margin: "5px 0px",
    padding: "2%",
    display: "flex",
    borderBottom: "1px solid #CCC",
  },
  productName: { width: "80%" },
  productPrice: { width: "20%" },
  customerInfoCon: { marginTop: 20, background: "#f3f3f3" },
  customerInfo: { display: "flex", padding: "1% 2%" },
  infoLable: { fontWeight: "bold", paddingRight: 10, width: "10%" },
  buttonCon: { margin: "20px 0px", textAlign: "center" },
  button: {
    background: "#27ae60",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    borderRadius: 5,
    fontWeight: "bold",
    color: "#FFF",
  },
}));

//Recipt.defaultProps = {};
//Recipt.propTypes = {};
