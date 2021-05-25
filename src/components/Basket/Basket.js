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
} from "@material-ui/core";

import { checkout } from "../../actions/purchases";

function Basket() {
  const classes = useStyles();
  var totalPrice = 0;
  var dispatch = useDispatch();
  const history = useHistory();
  const basketItems = useSelector((state) => state.purchases);
  var item = "aa";
  console.log(basketItems);

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
      <Button onClick={() => history.goBack()}>Back</Button>

      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <div style={{ minHeight: "90vh" }}>
            {/* if notloaded then loader else map */}
            {basketItems.map((item) => (
              <Grid item className={classes.itemInBasket} xs={6}>
                <h1>{item.name}</h1>
                <img src={item.image} />
                <h3>{item.size}</h3>
                <h3>{item.color}</h3>
              </Grid>
            ))}
          </div>

          <Grid item xs={5}>
            <form autoComplete="off" noValidate onSubmit={makePurchase}>
              <h1>Total price: {purchaseDetails.price}</h1>
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
              <Button type="submit">PURCHASE</Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Basket;
