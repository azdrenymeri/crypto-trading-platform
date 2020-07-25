import React, { Fragment } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import OpenTrades from "./OpenTrades/OpenTrades";
import TradingHistory from "./TradingHistory/TradingHistory";
import Trades from './Trades/Trades';

class BottomSection extends React.Component {
  render() {
    return (
      <Fragment>
        <ul className="nav nav-sm nav-tabs nav-tabs-sm  bd-highlight">
          <li className="nav-item">
            <NavLink
              to="/trading-platform/open-trades"
              className="nav-link"
              activeClassName="active"
            >
              Open Trades
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/trading-platform/trading-history"
              className="nav-link"
              activeClassName="active"
            >
              Trading History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/trading-platform/trades"
              className="nav-link"
              activeClassName="active"
            >
              Trades Worldwide
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">
              Disabled
            </a>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </li> */}
        </ul>
        <div className="bd-highlight overflow-auto">
          <Switch>
            <Route path="/trading-platform/open-trades">
              <OpenTrades />
            </Route>
            <Route path="/trading-platform/trading-history">
              <TradingHistory />
            </Route>
            <Route path="/trading-platform/trades">
              <Trades />
            </Route>
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default BottomSection;
