import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { LocalOffer as Badge } from "@material-ui/icons";
import useStyles from "./styles.js";

const ProductDescription = ({ product }) => {
  const styles = useStyles();
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <Typography>Available offers</Typography>
      <Box className={styles.smallText}>
        <Typography>
          <Badge className={styles.badge} />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </Typography>
        <Typography>
          <Badge className={styles.badge} />
          Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
          transaction, Terms and Condition apply
        </Typography>
        <Typography>
          <Badge className={styles.badge} />
          Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
          ACs
        </Typography>
        <Typography>
          <Badge className={styles.badge} />
          Partner OfferExtra 10% off upto ₹500 on next furniture purchase
        </Typography>
      </Box>
      <Table>
        <TableBody>
          <TableRow className={styles.smallText}>
            <TableCell className={styles.greyTextColor}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </TableRow>
          <TableRow className={styles.smallText}>
            <TableCell className={styles.greyTextColor}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </TableRow>
          <TableRow className={styles.smallText}>
            <TableCell className={styles.greyTextColor}>Seller</TableCell>
            <TableCell className={styles.smallText}>
              <span style={{ color: "#2874f0" }}>SuperComNet</span>
              <Typography>GST invoice available</Typography>
              <Typography>View more sellers starting from ₹329</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL} alt={adURL} style={{ width: 390 }} />
            </TableCell>
          </TableRow>
          <TableRow className={styles.smallText}>
            <TableCell className={styles.greyTextColor}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDescription;
