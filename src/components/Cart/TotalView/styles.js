import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  component: {
    // width: '30%'
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  greyTextColor: {
    color: "#878787",
  },
  container: {
    "& > *": {
      marginBottom: 20,
      fontSize: 14,
    },
  },
  price: {
    float: "right",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0",
  },
}));
