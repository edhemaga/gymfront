import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  // indItem:{
  //   fontFamily: 'roboto',
  // },

  image: {
    width: "100%",
    borderRadius: 5,
    border: "1px solid #dee0df",
    // boxShadow:
    //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
  },
  aboutItem: {
    borderBottomRightRadius: 10,
    background: "#F4F4F4",
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: 5,
    boxShadow:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
  },
  itemName: {
    textDecoration: "none",
    fontWeight: "400",
    fontSize: "1.2em",
  },
  itemPrice: {
    textDecoration: "none",
    fontWeight: "400",
    fontSize: "0.93em",
    marginTop: "-5px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
