import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";
import useStyles from "./styles";
import { Grid, Button, TextField, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { checkout, deleteOne } from "../../actions/purchases";
import Modal from "@material-ui/core/Modal";
import ThankYou from "../../assets/ThankYou.png";
import { useHistory, Redirect } from "react-router-dom";

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
    email: "",
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
    if (
      purchaseDetails.name != "" &&
      purchaseDetails.number != "" &&
      purchaseDetails.email != ""
    ) {
      dispatch(checkout(purchaseDetails));
      clear();
      handleOpen();
    }
  }

  const calculatePrice = (basketItems) => {
    basketItems.map((item) => {
      totalPrice += ((100 - item.discount) / 100) * item.price;
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
    dispatch(deleteOne(itemIndx));
  }

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
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>Artikal</h3>
            <h3 style={{ marginTop: 0, marginBottom: 0 }}>Cijena</h3>
          </div>
          <hr
            style={{
              border: "1px solid rgb(235, 235, 235)",
              marginLeft: 10,
              marginRight: 10,
            }}
          ></hr>

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
                <p style={{ marginLeft: "-15px" }}>
                  <del style={{ marginRight: 10, color: "#969696" }}>
                    {item.price}KM
                  </del>
                  <span>{((100 - item.discount) / 100) * item.price}KM</span>
                </p>
                <DeleteIcon
                  onClick={() => removeItem(item, indx)}
                  style={{
                    marginTop: "0.5em",
                    marginLeft: 30,
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
            style={{ marginTop: 40, marginRight: 20 }}
            autoComplete="off"
            onSubmit={makePurchase}
            className={`${classes.root} `}
          >
            <h1
              style={{
                marginLeft: 10,
                marginTop: 0,
                width: "100%",
                marginBottom: 0,
                borderBottom: "2px solid #ebebeb",
              }}
            >
              Ukupna cijena: {purchaseDetails.price}
            </h1>
            <TextField
              required
              name="name"
              variant="outlined"
              label="Ime i prezime"
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
              required
              name="number"
              variant="outlined"
              label="Broj telefona"
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
              required
              name="number"
              variant="outlined"
              label="Email"
              type="email"
              fullWidth
              value={null}
              onChange={(e) =>
                setPurchaseDetails({
                  ...purchaseDetails,
                  email: e.target.value,
                })
              }
            />
            <Button
              color="primary"
              variant="contained"
              type="submit"
              className={classes.buttonSubmit}
            >
              Završi kupovinu
            </Button>
          </form>
          {/* </Paper> */}
        </Grid>
      </Grid>
      {/* </Container> */}
      <Modal
        onClick={() => {
          history.push("/");
        }}
        style={{
          width: "100wv",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        <div>
          <img
            src={ThankYou}
            style={{
              alignSelf: "center",
              width: "60vw",
            }}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Basket;
