import React from "react";
import { Switch, Route } from "react-router-dom";

import Aux from "../../hoc/Aux/Aux";

import NavigationBar from "../NavigationBar/NavigationBar";
import TradingPlatform from "../TradingPlatform/TradingPlatform";
import Home from "../Home/Home";
import About from "../About/About";


const layout = (props) => {
  return (
    <Aux>
      <NavigationBar />
      <div className="m-3">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/trading-platform">
          <TradingPlatform />
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
