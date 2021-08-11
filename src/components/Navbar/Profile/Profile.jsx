import { Menu, MenuItem, Typography } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
import { PowerSettingsNew } from "@material-ui/icons";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logout = () => {
    setAccount("");
  };
  return (
    <div>
      <Link onClick={handleClick}>
        <Typography style={{ marginTop: 2 }}>{account}</Typography>
      </Link>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={styles.component}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />
          <Typography className={styles.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
