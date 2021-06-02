import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";
import { useHistory, Redirect } from "react-router-dom";
import useStyles from "./styles";
import { Container, Grid, Button, TextField, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { checkout } from "../../actions/purchases";

function Basket() {
  const classes = useStyles();
  var totalPrice = 0;
  var dispatch = useDispatch();
  const basketItems = useSelector((state) => state.purchases);
  var item = null;

  const [purchaseDetails, setPurchaseDetails] = useState({
    name: "",
    number: "",
    price: 0,
    items: basketItems,
  });
  useEffect(() => {
    calculatePrice(basketItems);
  }, []);

  function clear() {
    setPurchaseDetails({ name: "", number: "", price: 0, items: [] });
  }

  function makePurchase(e) {
    e.preventDefault();
    dispatch(checkout(purchaseDetails));
    clear();
  }

  const calculatePrice = (basketItems) => {
    basketItems.map((item) => {
      totalPrice += item.price;
    });
    setPurchaseDetails({ ...purchaseDetails, price: totalPrice });
  };

  function removeItem(item, itemIndx) {
    basketItems.splice(itemIndx, 1);
    setPurchaseDetails({
      ...purchaseDetails,
      items: basketItems,
      price: purchaseDetails.price - item.price,
    });
  }

  return (
    <div>
      {/* <Container> */}
      <Grid
        // container
        // justify="space-between"
        alignItems="stretch"
        spacing={0}
      >
        <div
          style={{ minHeight: "90vh" }}
          style={{
            // display: "grid",
            // gridTemplateColumns: "1fr 1fr",
            margin: "10px 0 10px 0",
          }}
        >
          <div
            style={{
              marginLeft: 10,
              display: "grid",
              gridTemplateColumns: "4fr 1fr",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>Product</h3>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>Price</h3>
          </div>
          <hr style={{ border: "1px solid rgb(235, 235, 235)", marginLeft: 10, marginRight: 10 }}></hr>

          {/* if notloaded then loader else map */}
          {basketItems.map((item, indx) => (
            <div
              item
              className={classes.itemInBasket}
              style={{
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 10,
                marginTop: 20,
                display: "grid",
                gridTemplateColumns: "4fr 1fr",
                width: "100%",
              }}
            >
              <span style={{ display: "flex" }}>
                <img
                  src={item.image}
                  style={{ width: "100px", borderRadius: 5 }}
                />
                <span
                  style={{
                    marginLeft: 20,
                    width: "65%",
                  }}
                >
                  <h3>{item.name}</h3>
                  <h3>
                    <pre
                      style={{
                        margin: 0,
                        fontFamily: "Roboto",
                        display: "flex",
                      }}
                    >
                      {item.size} {item.color}
                    </pre>
                  </h3>
                </span>
              </span>
              <span style={{ display: "flex" }}>
                <p style={{ paddingLeft: 5, paddingRight: 20 }}>{item.price}</p>
                <DeleteIcon
                  onClick={() => removeItem(item, indx)}
                  style={{
                    marginTop: "0.5em",
                    marginLeft: 70,
                    color: "#8f0114",
                  }}
                ></DeleteIcon>
              </span>
            </div>
          ))}
        </div>

        <Grid>
          {/* <Paper className={classes.paper}> */}
          <form
            autoComplete="off"
            noValidate
            onSubmit={makePurchase}
            className={`${classes.root} `}
          >
            <h1
              style={{
                marginLeft: 10,
                marginTop: 0,
                marginBottom: 0,
                borderBottom: "2px solid #ebebeb",
              }}
            >
              Total price: {purchaseDetails.price}
            </h1>
            <TextField
              name="name"
              variant="outlined"
              label="Name"
              fullWidth
              value={purchaseDetails.name}
              onChange={(e) =>
                setPurchaseDetails({
                  ...purchaseDetails,
                  name: e.target.value,
                })
              }
            />
            <TextField
              name="number"
              variant="outlined"
              label="Number"
              fullWidth
              value={purchaseDetails.number}
              onChange={(e) =>
                setPurchaseDetails({
                  ...purchaseDetails,
                  number: e.target.value,
                })
              }
            />
            <TextField
              name="number"
              variant="outlined"
              label="Email"
              fullWidth
              value={null}
              // onChange={(e) =>
              //   setPurchaseDetails({
              //     ...purchaseDetails,
              //     number: e.target.value,
              //   })
              // }
            />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              className={classes.buttonSubmit}
            >
              PURCHASE
            </Button>
          </form>
          {/* </Paper> */}
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
}

export default Basket;
