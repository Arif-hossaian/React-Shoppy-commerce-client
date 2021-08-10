import { Cart, Navbar, Layout } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box style={{ marginTop: 54 }}>
        <Switch>
          <Route exact path component={Layout} />
          <Route exact path component={Cart} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
};

export default App;
