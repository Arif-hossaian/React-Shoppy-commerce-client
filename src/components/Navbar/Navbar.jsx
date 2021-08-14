import {
  AppBar,
  Toolbar,
  withStyles,
  IconButton,
  Drawer,
  Box,
  List,
} from "@material-ui/core";
import { Menu } from '@material-ui/icons';
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar.jsx";
import NavButton from "./NavButton/NavButton";
import { useState } from "react";

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Navbar = () => {
  const styles = useStyles();
  const logoURL = "https://i.ibb.co/sKZw595/logo.png";
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const list = () => (
    <Box className={styles.list} onClick={handleClose}>
      <List>
        <listItem button>
          <NavButton />
        </listItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" className={styles.header}>
      <ToolBar>
        <IconButton
          color="inherit"
          className={styles.menuButton}
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Link to="/" className={styles.component}>
          <img src={logoURL} alt="Mobileshop" className={styles.logo} />
        </Link>
        <SearchBar />
        <NavButton />
      </ToolBar>
    </AppBar>
  );
};

export default Navbar;
