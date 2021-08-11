import { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { authenticateSignup, authenticateLogin } from "../../api/Api.js";
import useStyles from "./styles.js";

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const LoginDialog = ({ open, setOpen, setAccount }) => {
  const styles = useStyles();
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const accountInitialValues = {
    login: {
      view: "login",
      heading: "Login",
      subHeading: "Get access to your Orders, Wishlist and Recommendations",
    },
    signup: {
      view: "signup",
      heading: "Looks like you're new here",
      subHeading: "Signup to get started",
    },
  };
  const [account, setToggleAccount] = useState(accountInitialValues.login);
  const handleClose = () => {
    setOpen(false);
    setToggleAccount(accountInitialValues.login);
  };
  const toggleAccount = () => {
    setToggleAccount(accountInitialValues.signup);
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) return;
    handleClose();
    setAccount(login.username);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={styles.component}>
        <Box style={{ display: "flex" }}>
          <Box className={styles.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={styles.login}>
              <TextField
                name="username"
                required
                label="Enter Email/Mobile number"
                onChange={(e) => onValueChange(e)}
              />
              <TextField
                name="password"
                required
                label="Enter Password"
                onChange={(e) => onValueChange(e)}
              />
              <Button variant="contained" onClick={() => loginUser()} className={styles.loginbtn}>
                Login
              </Button>
              <Typography
                className={styles.createText}
                onClick={() => toggleAccount()}
              >
                New to Shoppy-commerce? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={styles.login}>
              <TextField
                name="firstname"
                required
                label="Enter Firstname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="lastname"
                required
                label="Enter Lastname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="username"
                required
                label="Enter Username"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="email"
                required
                label="Enter Email"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="password"
                required
                label="Enter Password"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="phone"
                required
                label="Enter Phone"
                onChange={(e) => onInputChange(e)}
              />
              <Button className={styles.loginbtn} onClick={() => signupUser()}>
                Continue
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
