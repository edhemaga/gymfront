import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { Container, Grow, Grid, CircularProgress } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Link } from "react-router-dom";
import { getItems } from "../../../actions/items.js";
import { fetchItem, fetchitem } from "../../../api/index.js";
import { Button } from "@material-ui/core";
import IndividualForm from "./individualForm/individualForm";

function IndividualItem({ match }) {
  // const items = useSelector((state)=> state.items);
  const history = useHistory();
  // const basketItems = useSelector((state)=> state.purchases);
  const searchId = match.params.id;

  const [clickedItem, setClickedItem] = useState({
    name: "",
    sizes: [],
    colors: [],
  });

  async function getItemById(id) {
    const { data } = await fetchItem(id);
    setClickedItem(data);
  }

  useEffect(() => {
    getItemById(searchId);
  }, []);
  // var clickedItem={};

  // items.map((item)=>{
  //     if(searchId == item._id){
  //         clickedItem=item;
  //     }
  // })

  return !clickedItem.sizes.length ? (
    <CircularProgress />
  ) : (
    <div>
      <div>
        <Button
          variant="outlined"
          onClick={() => history.goBack()}
          style={{ marginLeft: 25, marginBottom: 10 }}
        >
          Back
        </Button>
      </div>

      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={clickedItem.selectedFile.length}>
            <Carousel
              dynamicHeight="true"
              autoPlay
              interval="5000"
              transitionTime="100"
              infiniteLoop="true"
            >
              {clickedItem.selectedFile.map((image) => (
                <div
                  style={{
                    height: "100%",
                  }}
                >
                  <img src={image} style={{ alignSelf: "center" }} />
                </div>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={5}>
            <IndividualForm item={clickedItem} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default IndividualItem;
