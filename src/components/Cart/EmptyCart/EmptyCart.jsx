import { Typography, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"
import useStyles from "./styles.js";

const EmptyCart = () => {
    const history = useHistory();
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  const styles = useStyles();
  const addItem = () => {
      history.push("/")
  }
  return (
    <Box className={styles.component}>
      <Box className={styles.container}>
        <img src={imgurl} alt={imgurl} className={styles.image} />
        <Typography>Your cart is empty!</Typography>
        <Typography>Add items to it now.</Typography>
        <Button variant="contained" className={styles.button} onClick={() => addItem()}>Shop now</Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
