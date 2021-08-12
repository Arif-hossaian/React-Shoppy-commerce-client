import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  component: {
    borderTop: "1px solid #f0f0f0",
    borderRadius: 0,
    display: "flex",
  },
  leftComponent: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: 110,
    width: 110,
  },
  mid: {
    margin: 20,
  },
  greyTextColor: {
    color: "#878787",
  },
  smallText: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  remove: {
    marginTop: 20,
    fontSize: 16,
  },
}));
