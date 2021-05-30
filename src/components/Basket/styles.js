import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "center",
    width: "30%",
  },
  fileInput: {
    width: "100%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
}));

// export default makeStyles((theme) => ({
//   itemInBasket:{
//       minHeight: '800px',
//       minWidth: '500px',
//   }
// }));
