import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  component: {
    display: "flex",
    justifyContent: "space-between",
    margin: "55px 130px 0 130px",
    overflowX: "overlay",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  container: {
    padding: "12px 8px",
    textAlign: "center",
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
  },
}));
