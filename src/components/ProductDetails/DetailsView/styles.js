import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    background: "#FFFFFF",
    // margin: '0 80px',
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  price: {
    fontSize: 28,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
}));
