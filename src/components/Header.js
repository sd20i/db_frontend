"use-strict";
import React from "react";
import { makeStyles } from "@material-ui/core/";

function Header(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <h3 className={s.headline}>Carbuilder application</h3>
    </div>
  );
}

export default Header;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    verticalPadding: "1.1vh",
    background: "#FED",
  },
  headline: { padding: "1.3vh" },
}));
