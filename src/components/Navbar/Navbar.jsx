import { AppBar, Box, Toolbar, withStyles } from "@material-ui/core";
import useStyles from "./styles.js";
import SearchBar from "./SearchBar/SearchBar.jsx";
import NavButton from "./NavButton/NavButton";

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Navbar = () => {
  const styles = useStyles();
  const logoURL = "https://i.ibb.co/sKZw595/logo.png";
  return (
    <AppBar position="fixed" className={styles.header}>
      <ToolBar>
        <Box className={styles.component}>
          <img src={logoURL} alt="Mobileshop" className={styles.logo} />
        </Box>
        <SearchBar />
        <NavButton />
      </ToolBar>
    </AppBar>
  );
};

export default Navbar;
