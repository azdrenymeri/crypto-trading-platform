import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Aux from "../../hoc/Aux/Aux";
import Spinner from '../../components/UI/Spinner/Spinner';

import NavigationBar from "../NavigationBar/NavigationBar";

// import TradingPlatform from "../TradingPlatform/TradingPlatform";
import Home from "../Home/Home";
import About from "../About/About";

const AsyncTradingPlatform = React.lazy(async() => {
    return import("../TradingPlatform/TradingPlatform");
});

const layout = (props) => {
  return (
    <Aux>
      <NavigationBar />
      <div className="d-flex vh-100" style={{padding:"1rem", paddingTop:"5rem"}}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/trading-platform">
          <Suspense  fallback={<Spinner />}>
          <AsyncTradingPlatform />
          <Redirect to="/trading-platform/open-trades" />
          </Suspense>
        </Route>
        <Route path="/about">
            <About />
        </Route>
      </Switch>
      </div>
    </Aux>
  );
};
export default layout;
