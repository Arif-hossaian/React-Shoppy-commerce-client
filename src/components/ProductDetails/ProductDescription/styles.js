import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  smallText: {
    fontSize: 14,
    verticalAlign: "baseline",
    "& > *": {
      fontSize: 14,
      marginTop: 10,
    },
  },
  greyTextColor: {
    color: "#878787",
  },
  badge: {
    marginRight: 10,
    color: "#00CC00",
    fontSize: 15,
  },
  wrapper: {
    display: "flex",
  },
}));
