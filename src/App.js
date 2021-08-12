import { Cart, Navbar, Layout, DetailView, ScrollToTop } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import { TemplateProvider } from "./templets/TempleteProvider";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Box style={{ marginTop: 54 }}>
            <Switch>
              <Route exact path="/" component={Layout} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:id" component={DetailView} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
};

export default App;
