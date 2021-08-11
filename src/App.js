import { Cart, Navbar, Layout } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import { TemplateProvider } from "./templets/TempleteProvider";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Box style={{ marginTop: 54 }}>
            <Switch>
              <Route exact path component={Layout} />
              <Route exact path component={Cart} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
};

export default App;
