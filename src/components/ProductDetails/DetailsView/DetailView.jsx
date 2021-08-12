import { useEffect } from "react";
import { getProductDetails } from "../../../redux/actions/productActions.js";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles.js";
import clsx from "clsx";
import { Box, Grid, Typography } from "@material-ui/core";
import ProductDescription from "../ProductDescription/ProductDescription.jsx";
import ActionItem from "../Product-actionItem/ActionItem.jsx";

const ProductDetails = ({ match }) => {
  const styles = useStyles();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const { product } = useSelector((state) => state.getProductDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <Box className={styles.component}>
      {product && Object.keys(product).length > 0 ? (
        <Grid container className={styles.container}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            sm={8}
            xs={12}
            className={styles.rightContainer}
          >
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              className={clsx(styles.greyTextColor, styles.smallText)}
              style={{ marginTop: 5 }}
            >
              8 Ratings & 1 Reviews
              <span>
                <img
                  src={fassured}
                  alt={fassured}
                  style={{ width: 77, marginLeft: 20 }}
                />
              </span>
            </Typography>
            <Typography>
              <span className={styles.price}>৳{product.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span className={styles.greyTextColor}>
                <strike>৳{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <ProductDescription product={product} />
          </Grid>
        </Grid>
      ) : (
        <Typography>Loading</Typography>
      )}
    </Box>
  );
};

export default ProductDetails;
