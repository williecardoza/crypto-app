import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HomePage, CoinPage, Portfolio } from "./pages";
import { NavBar } from "./components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { useSelector } from "react-redux";

const App = () => {
  const currency = useSelector(state => state.app.currency);
  const theme = useSelector(state => state.app.theme);

  useEffect(() => {
    localStorage.setItem("currency", JSON.stringify(currency));
  }, [currency]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/coin/:coinId"
              component={props => <CoinPage {...props} />}
            />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};
export default App;
