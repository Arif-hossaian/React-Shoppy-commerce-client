import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {},
  image: {
    width: "100%",
    height: 280,
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
      height: 180,
    },
  },
}));
