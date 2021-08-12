import { Box, Button, Card, Typography } from "@material-ui/core";
import clsx from "clsx";
import ControlButton from "../QuantityControl-button/ControlButton.jsx";
import { addEllipsis } from "../../../utils/util.js";
import useStyles from "./styles.js";

const CartItem = ({ item, removeItemFromCart }) => {
  const styles = useStyles();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <Card className={styles.component}>
      <Box className={styles.leftComponent}>
        <img src={item.url} alt={item.url} className={styles.image} />
        <ControlButton />
      </Box>
      <Box className={styles.mid}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <Typography
          className={clsx(styles.greyTextColor, styles.smallText)}
          style={{ marginTop: 10 }}
        >
          Seller:RetailNet
          <span>
            <img
              src={fassured}
              alt={fassured}
              style={{ width: 50, marginLeft: 10 }}
            />
          </span>
        </Typography>
        <Typography style={{ margin: "20px 0" }}>
          <span className={styles.price}>৳{item.price.cost}</span>
          &nbsp;&nbsp;&nbsp;
          <span className={styles.greyTextColor}>
            <strike>৳{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          className={styles.remove}
          onClick={() => removeItemFromCart(item.id)}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
