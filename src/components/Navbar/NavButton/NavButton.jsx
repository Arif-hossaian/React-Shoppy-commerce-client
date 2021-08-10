import { Badge, Box, Button, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";

const NavButton = () => {
  const styles = useStyles();
  return (
    <Box className={styles.wrapper}>
      <Button variant="contained" className={styles.login}>
        Login
      </Button>
      <Link to="/cart" className={styles.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: "10px" }}>Cart</Typography>
      </Link>
    </Box>
  );
};

export default NavButton;
