import { useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import Banner from "./Banner/Banner";
import SecNavbar from "./Second-navbar/SecNavbar";
import Slide from "./Slide/Slide";
//import { products } from "../../constants/data.js"
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions.js";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});

const Layout = () => {
  const styles = useStyle();
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <SecNavbar />
      <Box className={styles.component}>
        <Banner />
      </Box>
      <Slide products={products} />
    </div>
  );
};

export default Layout;
