"use-strict";
import React from "react";
import { makeStyles } from "@material-ui/core/";
import { Link } from "react-router-dom";

function SplashScreen(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <div className={s.logoCon}>
        <div className={s.logo}>
          <img
            className={s.logoIcon}
            src={require("../assets/logo.png")}
            alt="0"
          />
        </div>
        <div className={s.buttonCon}>
          <Link to="/shop">
            <button className={s.button}>Build a car</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "95vh",
    backgroundImage:
      "linear-gradient( -16deg, #bdc3c7 50%, #64b9ac 0%, #bdc3c7 50%, #34495e 50%)",
  },
  logoCon: { width: "40%", margin: "0 auto", paddingTop: "10%" },
  logo: {
    width: 250,
    height: 250,
    margin: "0 auto",
    padding: 20,
    background: "#FFF",
    borderRadius: "50%",
  },
  logoIcon: { width: 250 },
  buttonCon: { textAlign: "center", paddingTop: 30 },
  button: {
    color: "#FFF",
    border: "none",
    borderRadius: 5,
    background: "#2980b9",
    cursor: "pointer",
    padding: "15px 30px",
    fontSize: "18px",
    "&:hover": {
      background: "#2f90d0",
    },
  },
}));
