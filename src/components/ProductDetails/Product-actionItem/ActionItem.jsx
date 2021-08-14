import { Box, Button } from "@material-ui/core";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import clsx from "clsx";
import { addToCart } from "../../../redux/actions/cartActions.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useStyles from "./styles.js";
import { payUsingSslCommerz } from "../../../api/Api.js";

const ActionItem = ({ product }) => {
  const styles = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(product.id));
    history.push("/cart");
  };
  const buyNow = async () => {
    await payUsingSslCommerz()
  }
  return (
    <Box className={styles.leftContainer}>
      <img
        src={product.detailUrl}
        alt={product.detailUrl}
        className={styles.productImage}
      />
      <br />
      <Button
        className={clsx(styles.button, styles.addToCart)}
        style={{ marginRight: 10 }}
        variant="contained"
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add to Cart
      </Button>
      <Button
        className={clsx(styles.button, styles.buyNow)}
        variant="contained"
        onClick={() => buyNow()}
      >
        <Flash /> Buy Now
      </Button>
    </Box>
  );
};

export default ActionItem;
