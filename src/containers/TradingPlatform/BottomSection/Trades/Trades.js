import React, { Component } from "react";

import { connect } from 'react-redux';
import { store } from '../../../../state/store/store';
import { addNewTrade, cleanTrades } from '../../../../state/actions/worldTradesAction';

import TradeItem from './TradeItem/TradeItem';

import { tradesSocket } from '../../../../ws/trades';

class Trades extends Component {

  constructor(props){
    super(props);
    this.intervalId = 0;
  }

  componentWillMount(){
    tradesSocket.addEventListener("message", this.handleTrades);
  }

  componentWillUnmount(){
    tradesSocket.removeEventListener("message", this.handleTrades);
    clearInterval(this.intervalId.__id);
    store.dispatch(cleanTrades());
  }


  handleTrades = (response) => {
    this.intervalId = setInterval(() => {
      console.log("Interval");
      let tradeObj = JSON.parse(response.data);
      store.dispatch(addNewTrade(tradeObj))
    }, 3000)
  }

  render() {

    const data = this.props.trades.map (trade => {
      return (
        <TradeItem trade={trade} />
      )
    })

    return (
      <div className="bd-highlight">
        <table className="table table-sm table-striped">
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
          <tbody>
              { data }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 return { 
   trades: state.worldTradesReducer.worldTrades
 }
};

export default connect(mapStateToProps)(Trades);
