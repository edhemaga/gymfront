import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";

function Item({ item }) {
  const classes = useStyles();

  return (
    <div className={classes.indItem}>
      <img className={classes.image} src={item.selectedFile[0]}></img>
      <div className={classes.aboutItem}>
        <h2 align="center" className={classes.itemName}>
          <b>{item.name}</b>
        </h2>
        <h3 align="center" className={classes.itemPrice}>
          {item.price}.00 BAM
        </h3>
      </div>
    </div>
  );
}

export default Item;
