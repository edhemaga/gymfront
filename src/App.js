import React, { useEffect } from "react";
import {
  Container,
  AppBar,
  Grid,
  Button,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IndividualItem from "./components/Items/IndividualItem/IndividualItem";
import useStyles from "./styles";
import logo from "./images/presyonLogo.jpg";
import Home from "./components/Home/Home";
import Basket from "./components/Basket/Basket";
import Slideshow from "./components/slideshow/slideshow";
import Badge from "@material-ui/core/Badge";

import { Carousel } from "react-responsive-carousel";
import { useIdleTimer } from "react-idle-timer";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchGender } from "./actions/selectedGender";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //za ikonice
// import { faPhone } from "@fortawesome/free-solid-svg-icons"; //za ikonice

import Modal from "@material-ui/core/Modal";

import "./App.css";

function App() {
  const classes = useStyles();
  var dispatch = useDispatch();

  window.onscroll = function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar").style.borderBottom =
        "3px solid #8f0114";
      //#ee1111 //svijetlo crvena
    } else {
      document.getElementById("navbar").style.borderBottom =
        "3px solid #01148F";
    }
  };
  const basketItems = useSelector((state) => state.purchases);
  const selectedGender = useSelector((state) => state.selectedGender);

  const history = useHistory();

  /*--- MODAL */
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleMen = () => {
    dispatch(switchGender("M"));
  };

  const handleWomen = () => {
    dispatch(switchGender("F"));
  };

  const handleClose = () => {
    setOpen(false);
  };

  function closeModal() {
    setOpen(false);
  }
  /*---------------*/
  /* idle timer */
  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60, //1000ms puta X; bilo 15
    onIdle: handleOpen,
    onActive: handleClose,
    onAction: handleClose,
    debounce: 500,
  });
  /*------------*/
  return (
    <div>
      <Container style={{ height: 100, marginBottom: 10 }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <AppBar
            id="navbar"
            className={classes.appBar}
            position="static"
            color="inherit"
            style={{
              borderBottom: "3px solid #01148F",
              position: "fixed",
              top: 0,
              left: "2%",
              right: "2%",
              width: "96%",
            }}
          >
            <Grid item xs={1}>
              <Link>
                <ArrowBackIcon
                  style={{ marginLeft: 50 }}
                  className={classes.icon}
                  onClick={() => {
                    history.goBack();
                  }}
                ></ArrowBackIcon>
              </Link>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <div>
                <Link to="/">
                  <img
                    className={classes.image}
                    src={logo}
                    align="center"
                    alt="icon"
                    height="70"
                  />
                </Link>
              </div>
            </Grid>

            <Grid
              item
              xs={3}
              style={{ paddingTop: "20px", paddingLeft: "70px" }}
            >
              <Button onClick={handleMen}>
                <b>Men</b>
              </Button>
              <Button onClick={handleWomen}>
                <b>Women</b>
              </Button>
            </Grid>

            <Grid item xs={1}>
              <div stlye={{ display: "flex" }}>
                <Link to="/items/basket" style={{ marginBottom: 25 }}>
                  <Badge
                    className={classes.icon}
                    badgeContent={basketItems.length}
                    color="error"
                  >
                    <ShoppingCartIcon
                      style={{ marginTop: 3, marginRight: 1 }}
                    ></ShoppingCartIcon>
                  </Badge>
                </Link>
              </div>
            </Grid>
          </AppBar>
        </Grid>
      </Container>
      {/* modal */}
      <Modal
        style={{
          width: "100%",
          height: "100%",
        }}
        open={open}
        onClose={handleClose}
      >
        <Carousel
          autoPlay
          interval="5000"
          transitionTime="100"
          infiniteLoop={true}
          showThumbs={false}
          showArrows={false}
          swipeable={false}
          showStatus={false}
        >
          <div onClick={closeModal}>
            <img
              style={{
                alignSelf: "center",
                marginLeft: "0vw",
                marginRight: "0vw",
                marginTop: "0vh",
                marginBottom: "0vh",
                width: "100vw",
                height: "100vh",
              }}
              src={
                "https://cdn.shopify.com/s/files/1/0275/7617/2638/files/half_size_logo_banner_2048x.jpg?v=1608897257"
              }
            />
          </div>
        </Carousel>
      </Modal>
      {/* modal */}
      <Container
        maxWidth="lg"
        style={{ maxHeight: 600, height: "calc(100% - 30px)", paddingTop: 10 }}
      >
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
            onClick={() => {
              this.history.push("/");
            }}
          />
          <Route
            path="/:id"
            exact
            component={IndividualItem}
            onClick={() => {
              this.history.push("/:id");
            }}
          />
          <Route
            path="/items/basket"
            exact
            component={Basket}
            onClick={() => {
              this.history.push("/items/basket");
              console.log(history);
            }}
          />
          <Route
            path="/items/slideshow"
            exact
            component={Slideshow}
            onClick={() => {
              this.history.push("/items/slideshow");
            }}
          />
        </Switch>
      </Container>
      {/* <div
        style={{
          height: "30px",
          backgroundColor: "#181135",
          margin: "0",
        }}
      ></div> */}
      {/* <div
        style={{
          height: "150px",
          backgroundColor: "#21174B",
          margin: "0 0 0 0",
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ padding: 5 }}>Test testić d.o.o.</div>
        <div style={{ padding: 5 }}>Facebook Instagram</div>
        <div style={{ padding: 5 }}>Konakt email@emalić.ba</div>
      </div> */}
    </div>
  );
}

export default App;
