import { AppBar, Toolbar, withStyles } from "@material-ui/core";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
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
