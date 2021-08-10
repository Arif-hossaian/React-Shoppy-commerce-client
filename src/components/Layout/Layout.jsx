import { Box, makeStyles } from "@material-ui/core";
import Banner from "./Banner/Banner";
import SecNavbar from "./Second-navbar/SecNavbar";
import Slide from "./Slide/Slide";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});

const Layout = () => {
  const styles = useStyle();
  return (
    <div>
      <SecNavbar />
      <Box className={styles.component}>
        <Banner />
      </Box>
      <Slide />
    </div>
  );
};

export default Layout;
