import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import useStyles from "./styles";
import {
  Container,
  Grow,
  Grid,
  CircularProgress,
  Button,
  TextField,
  Paper,
} from "@material-ui/core";

import { checkout } from "../../actions/purchases";

function Basket() {
  const classes = useStyles();
  var totalPrice = 0;
  var dispatch = useDispatch();
  const history = useHistory();
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

  return (
    <div>
      <Container>
        <Grid
          container
          // justify="space-between"
          alignItems="stretch"
          spacing={0}
        >
          <div
            style={{ minHeight: "90vh" }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            }}
          >
            {/* if notloaded then loader else map */}
            {basketItems.map((item) => (
              <Grid
                item
                className={classes.itemInBasket}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                <h3>{item.name}</h3>
                <img src={item.image} style={{ width: "100%" }} />
                <span style={{ display: "flex" }}>
                  <h2>
                    <pre style={{ margin: 0, fontFamily: "Roboto" }}>
                      {item.size} {item.color}
                    </pre>
                  </h2>
                </span>
              </Grid>
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
      </Container>
    </div>
  );
}

export default Basket;
