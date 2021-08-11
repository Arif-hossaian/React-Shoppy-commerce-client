import { useContext, useState } from "react";
import { Badge, Box, Button, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";
import LoginDialog from "../../Login/LoginDialog.jsx";
import { LoginContext } from "./../../../context/ContextProvider";
import Profile from "./../Profile/Profile";

const NavButton = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const openLoginDialog = () => {
    setOpen(true);
  };
  return (
    <Box className={styles.wrapper}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Link>
          <Button
            className={styles.login}
            variant="contained"
            onClick={() => openLoginDialog()}
          >
            Login
          </Button>
        </Link>
      )}
      <Link to="/cart" className={styles.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: "10px" }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default NavButton;
