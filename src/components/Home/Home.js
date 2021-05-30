import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Form from "../Form/Form";
import Items from "../Items/Items";
import { getItems } from "../../actions/items";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid
              item
              xs={12}
              sm={12}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              }}
            >
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <Form /> */}
              {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default Home;
