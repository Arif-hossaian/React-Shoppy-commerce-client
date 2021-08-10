import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles.js";

const SearchBar = () => {
  const styles = useStyles();
  return (
    <div className={styles.search}>
      <InputBase
        placeholder="Search for products..."
        classes={{
          root: styles.inputRoot,
          input: styles.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
