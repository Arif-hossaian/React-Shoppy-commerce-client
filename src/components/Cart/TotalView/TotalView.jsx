import { Box, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import useStyles from "./styles.js";

const TotalView = ({ cartItems }) => {
  const styles = useStyles();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const totalAmount = () => {
    let price = 0,
      discount = 0;
    //console.log(cartItems);
    // eslint-disable-next-line array-callback-return
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };
  useEffect(() => {
    totalAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);
  return (
    <Box className={styles.component}>
      <Box
        className={styles.header}
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        <Typography className={styles.greyTextColor}>PRICE DETAILS</Typography>
      </Box>
      <Box className={clsx(styles.header, styles.container)}>
        <Typography>
          Price ({cartItems?.length} item)
          <span className={styles.price}>৳{price}</span>
        </Typography>
        <Typography>
          Discount<span className={styles.price}>-৳{discount}</span>
        </Typography>
        <Typography>
          Delivery Charges<span className={styles.price}>৳40</span>
        </Typography>
        <Typography className={styles.totalAmount}>
          Total Amount
          <span className={styles.price}>৳{price - discount + 40}</span>
        </Typography>
        <Typography style={{ fontSize: 16, color: "green" }}>
          You will save ৳{discount - 40} on this order
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalView;
