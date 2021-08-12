import { Box, Button, Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions.js";
import CartItem from "./CartItem/CartItem.jsx";
import EmptyCart from "./EmptyCart/EmptyCart.jsx";
import useStyles from "./styles.js";
import TotalView from "./TotalView/TotalView.jsx";

const Cart = () => {
  const styles = useStyles();
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  useEffect(() => {
    //console.log(cartItems);
  }, [cartItems]);
  return (
    <div>
      {cartItems.length ? (
        <Grid container className={styles.component}>
          <Grid
            item
            lg={9}
            md={9}
            sm={12}
            xs={12}
            className={styles.leftComponent}
          >
            <Box className={styles.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <Box className={styles.bottom}>
              <Button variant="contained" className={styles.placeOrder}>
                Place Order
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
