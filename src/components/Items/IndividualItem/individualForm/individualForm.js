import React, { useState, useEffect, StyleSheet } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useHistory, Redirect } from "react-router-dom";


import "./individualForm.css";
import useStyles from "./styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Home from "@material-ui/icons/Home";

import { addToBasket } from "../../../../actions/purchases";
import { Button, Snackbar, Slide } from "@material-ui/core";

function IndividualForm({ item }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [orderData, setOrderData] = useState({
    name: item.name,
    image: item.selectedFile[0],
    size: "",
    color: "",
    price: item.price,
  });

  const history = useHistory();
  /*--- MODAL */
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState({
    msg: "",
    autoClose: 2000,
    position: { vertical: "bottom", horizontal: "center" },
  });

  const handleOpen = () => {
    if (orderData.size != "" && orderData.color != "") {
      setMessage({
        ...message,
        msg: (
          <div
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
            <div>Uspješno ste dodali artikal u korpu!</div>
            
          </div>
        ),
        autoClose: 1000,
        position: { vertical: "bottom", horizontal: "center" },
      });
    } else {
      setMessage({
        ...message,
        msg: (
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
            Morate izabrati boju i veličinu artikla!
          </p>
        ),
        autoClose: 2000,
        position: { vertical: "bottom", horizontal: "center" },
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /*---------------*/

  function handleSubmit(e) {
    e.preventDefault();
    if (orderData.size != "" && orderData.color != "") {
      try {
        dispatch(addToBasket(orderData));
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handleSubmitA(e) {
    if (orderData.size != "" && orderData.color != "") {
      try {
        dispatch(addToBasket(orderData));
        history.push('/items/basket');
      } catch (error) {
        console.log(error);
      }
    } else{
      handleOpen();
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

          <Button
            onClick={(e)=> handleSubmitA(e) }
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            style={{ marginTop: 20, background: "#52b202" }}
          >
            Završi kupovinu
          </Button>
      </form>
      <Snackbar
        anchorOrigin={message.position}
        open={open}
        onClose={handleClose}
        autoHideDuration={message.autoClose}
      >
        <span>{message.msg}</span>
      </Snackbar>
    </div>
  );
}

export default IndividualForm;
