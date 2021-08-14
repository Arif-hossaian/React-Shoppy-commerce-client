import { List, ListItem } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../../redux/actions/productActions.js";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const styles = useStyles();
  const [textSearch, setTextSearch] = useState();
  const [open, setOpen] = useState(true);

  const getSearchText = (textSearch) => {
    setTextSearch(textSearch);
    setOpen(false);
  };
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className={styles.search}>
      <InputBase
        placeholder="Search for products..."
        classes={{
          root: styles.inputRoot,
          input: styles.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => getSearchText(e.target.value)}
      />
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      {textSearch && (
        <List className={styles.list} hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle
                .toLowerCase()
                .includes(textSearch.toLowerCase())
            )
            .map((product) => (
              <ListItem key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpen(true)}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </List>
      )}
    </div>
  );
};

export default SearchBar;
