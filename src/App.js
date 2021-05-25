import React, { useEffect } from "react";
import { Container, AppBar, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import IndividualItem from "./components/Items/IndividualItem/IndividualItem";
import useStyles from "./styles";
import logo from "./images/presyonLogo.jpg";
import Home from "./components/Home/Home";
import Basket from "./components/Basket/Basket";
import Slideshow from "./components/slideshow/slideshow";
import { Carousel } from "react-responsive-carousel";
import { useIdleTimer } from "react-idle-timer";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //za ikonice
// import { faPhone } from "@fortawesome/free-solid-svg-icons"; //za ikonice

import Modal from "@material-ui/core/Modal";

import "./App.css";

function App() {
  const classes = useStyles();
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
  /* idle timer */
  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 150, //1000ms puta X
    onIdle: handleOpen,
    onActive: handleClose,
    onAction: handleClose,
    debounce: 500,
  });
  /*------------*/
  return (
    <Router>
      <Container style={{ height: 100, marginBottom: 10 }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Grid item xs={1}></Grid>
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
            <Grid item xs={1}>
              <div>
                <Link to="/items/basket" style={{marginBottom: 25}}>
                  <ShoppingCartIcon className={classes.icon}></ShoppingCartIcon>
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
                "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?fit=crop&h=1000&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Fbg%3D80000000%26txt%3DFree%2BStock%2BPhotos%26txtalign%3Dcenter%26txtclr%3Dfff%26txtfont%3DAvenir-Heavy%26txtpad%3D20%26txtsize%3D120%26w%3D1300&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10&txtsize=60&w=1500"
              }
            />
          </div>
        </Carousel>
      </Modal>
      {/* modal */}
      <Container maxWidth="lg">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={IndividualItem} />
          <Route path="/items/basket" exact component={Basket} />
          <Route path="/items/slideshow" exact component={Slideshow} />
        </Switch>
      </Container>
      <div
        style={{
          height: "30px",
          backgroundColor: "#181135",
          margin: "0",
        }}
      ></div>
      <div
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
      </div>
    </Router>
  );
}

export default App;
