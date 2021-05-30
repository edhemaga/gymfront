import React from "react";
import Item from "./Item/Item";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Items() {
  const items = useSelector((state) => state.items);
  const classes = useStyles();

  return !items.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={0}
    >
      {items.map((item) => (
        <Grid
          xs={12}
          sm={12}
          key={item._id}
          item
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: 15,
            marginBottom: 15,
            width: "100%",
          }}
        >
          <Link to={`/${item._id}`}>
            <Item item={item} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default Items;
