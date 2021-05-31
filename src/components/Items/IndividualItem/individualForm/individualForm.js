import React, { useState, useEffect, StyleSheet } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./individualForm.css";
import useStyles from "./styles";

import { addToBasket } from "../../../../actions/purchases";
import { Button, Paper, Snackbar } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

function IndividualForm({ item }) {
  const dispatch = useDispatch();
  const [orderData, setOrderData] = useState({
    name: item.name,
    image: item.selectedFile[0],
    size: "",
    color: "",
    price: item.price,
  });

  /*--- MODAL */
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function closeModal() {
    setOpen(false);
  }
  /*---------------*/

  function handleSubmit(e) {
    e.preventDefault();

    try {
      dispatch(addToBasket(orderData));
    } catch (error) {
      console.log(error);
    }
  }
  function setColorStyle(e, length) {
    for (var i = 0; i < length; i++) {
      var el = document.getElementById("color" + i);
      el.style.background = "white";
    }
    e.target.style.background = "#dbdbdb";
  }

  function setSizeStyle(e, length) {
    for (var i = 0; i < length; i++) {
      var el = document.getElementById("size" + i);
      el.style.background = "white";
    }
    e.target.style.background = "#dbdbdb";
  }

  const classes = useStyles();

  return (
    <div>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        {item.sizes.map((size, indx) => (
          <span
            style={{
              marginTop: 10,
              marginRight: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 5,
              background: "white",
              fontSize: 15,
              borderBottom: "1px solid #031292",
            }}
            id={"size" + indx}
            onClick={(e) => {
              setOrderData({ ...orderData, size: size });
              setSizeStyle(e, item.sizes.length);
            }}
          >
            {size}
          </span>
        ))}
        <div style={{ margin: 30 }}></div>
        {item.colors.map((color, indx) => (
          <span
            style={{
              marginTop: 10,
              marginRight: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 5,
              background: "white",
              fontSize: 15,
              borderBottom: "1px solid #031292",
            }}
            id={"color" + indx}
            onClick={(e) => {
              setOrderData({ ...orderData, color: color });
              setColorStyle(e, item.colors.length);
            }}
          >
            {color}
          </span>
        ))}
        <div style={{ margin: 20 }}></div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          onClick={handleOpen}
        >
          Add to basket
        </Button>
      </form>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={2000}>
        <p
          style={{
            background: "#3f4042",
            color: "white",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 80,
            paddingRight: 80,
            borderRadius: 5,
          }}
        >
          Uspješno ste dodali artikal u korpu!
        </p>
      </Snackbar>
    </div>
  );
}

export default IndividualForm;
