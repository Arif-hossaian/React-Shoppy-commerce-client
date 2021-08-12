import { Box, Button } from "@material-ui/core";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import clsx from "clsx";
import useStyles from "./styles.js";

const ActionItem = ({ product }) => {
  const styles = useStyles();
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
      >
        <Cart />
        Add to Cart
      </Button>
      <Button
        className={clsx(styles.button, styles.buyNow)}
        variant="contained"
      >
        <Flash /> Buy Now
      </Button>
    </Box>
  );
};

export default ActionItem;
