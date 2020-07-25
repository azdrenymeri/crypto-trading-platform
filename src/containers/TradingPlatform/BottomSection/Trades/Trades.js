import React, { Component } from "react";

import { connect } from "react-redux";
import { store } from "../../../../state/store/store";
import {
  addNewTrade,
  cleanTrades,
} from "../../../../state/actions/worldTradesAction";

import TradeItem from "./TradeItem/TradeItem";

import { tradesSocket } from "../../../../ws/trades";

class Trades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldSaveData: true,
    };
  }

  componentDidMount() {
    tradesSocket.addEventListener("message", this.handleTrades);
  }

  componentWillUnmount() {
    tradesSocket.removeEventListener("message", this.handleTrades);
    store.dispatch(cleanTrades());
  }

  handleTrades = (response) => {
    if (this.state.shouldSaveData) {
      this.setState({ shouldSaveData: false });
      let tradeObj = JSON.parse(response.data);
      store.dispatch(addNewTrade(tradeObj));
      console.log("Trades socket finished...");

      setTimeout(() => {
        console.log("Inside timeout");
        this.setState({ shouldSaveData: true });
      }, 4000);
    }
  };

  render() {
    const data = this.props.trades.map((trade, index) => {
      return (
        <TradeItem
          key={trade.timestamp}
          trade={trade}
          cssClasses={index === 0 ? "slide-in-fwd-center" : ""}
        />
      );
    });

    return (
      <div className="bd-highlight">
        <table className="table table-sm table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Base/Quote</th>
              <th scope="col">Direction</th>
              <th scope="col">Price</th>
              <th scope="col">Volume</th>
              <th scope="col">Price in USD</th>
            </tr>
          </thead>
          <tbody style={{ userSelect: "none" }}>{data}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trades: state.worldTradesReducer.worldTrades,
  };
};

export default connect(mapStateToProps)(Trades);
