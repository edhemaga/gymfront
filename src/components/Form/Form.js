import React, { useState } from "react";
import useStyles from "./styles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Checkbox,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createItem } from "../../actions/items";

function Form() {
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState({
    name: "",
    price: 0,
    description: "",
    discount: 0,
    reservation: false,
    selectedFile: [],
  });

  function clear() {
    setItemData({
      name: "",
      price: 0,
      gender: "",
      discount: 0,
      reservation: false,
      description: "",
      selectedFile: [],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    var sizes = itemData.sizes;
    var sizesArray = sizes.split(" ");
    itemData.sizes = sizesArray;

    var colors = itemData.colors;
    var colorsArray = colors.split(" ");
    itemData.colors = colorsArray;

    dispatchSubmit(itemData);
  }

  function dispatchSubmit(itemData) {
    dispatch(createItem(itemData));
  }

  function mapImages(e) {
    var imageArray = [];
    e.forEach((image) => {
      imageArray.push(image.base64);
    });
    return imageArray;
  }

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={itemData.name}
          onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
        />
        <TextField
          name="price"
          variant="outlined"
          label="Price"
          fullWidth
          value={itemData.price}
          onChange={(e) => setItemData({ ...itemData, price: e.target.value })}
        />
        <TextField
          name="gender"
          variant="outlined"
          label="Gender"
          fullWidth
          value={itemData.gender}
          onChange={(e) => setItemData({ ...itemData, gender: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={itemData.description}
          onChange={(e) =>
            setItemData({ ...itemData, description: e.target.value })
          }
        />
        <TextField
          name="sizes"
          variant="outlined"
          label="Sizes"
          fullWidth
          value={itemData.sizes}
          onChange={(e) => setItemData({ ...itemData, sizes: e.target.value })}
        />
        <TextField
          name="colors"
          variant="outlined"
          label="Colors"
          fullWidth
          value={itemData.colors}
          onChange={(e) => setItemData({ ...itemData, colors: e.target.value })}
        />
        <TextField
          name="discount"
          variant="outlined"
          label="Discount"
          fullWidth
          value={itemData.discount}
          onChange={(e) =>
            setItemData({ ...itemData, discount: e.target.value })
          }
        />
        <div>
          Rezervacija:
          <Checkbox
            checked={itemData.reservation}
            onChange={(e) =>
              setItemData({ ...itemData, reservation: e.target.checked })
            }
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
        {/* <div className={classes.fileInput}><FileBase type="file" multiple={true} onDone={({ base64 }) => setItemData({ ...itemData, selectedFile: base64 })} /></div> */}
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={true}
            onDone={(e) =>
              setItemData({ ...itemData, selectedFile: mapImages(e) })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
