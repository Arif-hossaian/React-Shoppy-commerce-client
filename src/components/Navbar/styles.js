import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    background: "#00bfff",
    height: 55,
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    color: "#FFFFFF",
    textDecoration: "none",
  },
  logo: {
    width: 220,
  },
  container: {
    display: "flex",
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
  subURL: {
    width: 10,
    height: 10,
    marginLeft: 4,
  },
  list: {
    width: 250,
  },
  menuButton: {
    // backgroundColor: "#fff",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  customButtons: {
    margin: "0 5% 0 auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
