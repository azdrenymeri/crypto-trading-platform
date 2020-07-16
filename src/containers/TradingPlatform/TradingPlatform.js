import React from "react";

import Aux from "../../hoc/Aux/Aux";
import Card from "../../components/UI/Card/Card";

import CryptoCurrencies from "./CryptoCurrencies/CryptoCurrencies";
import Chart from "./Chart/Chart";
import Trader from "./Trader/Trader";
import TradingHistory from "./TradesHistory/TradesHistory";

class TradingPlatform extends React.Component {
  render() {
    return (
      <Aux>
        <div className="row flex-grow-1 align-self-stretch" style={{height:"80% important!"}}>
          {/* cryptos list */}
          <div className="col-12 col-sm-4 col-md-3 d-flex h-75">
            <Card
              title="Crypto Currencies"
              icon={<i className="fas fa-sync"></i>}
              extraClasses="flex-fill bd-highlight"
              renderNoBody
            >
              <CryptoCurrencies />
            </Card>
          </div>
          {/* the graph */}
          <div className="col-12 col-sm-4 col-md-6 px-0 d-flex">
            <Card
              title="Charts"
              icon={<i className="far fa-chart-bar"></i>}
              extraClasses="flex-fill bd-highlight"
            >
              <Chart />
            </Card>
          </div>
          {/* Take action side */}
          <div className="col-12 col-sm-4 col-md-3 d-flex">
            <Card
              title="Take action"
              icon={<i className="fas fa-sync"></i>}
              extraClasses="flex-fill bd-highlight"
            >
              <Trader />
            </Card>
          </div>

          {/* Bottom  */}
          <div className="col d-flex h-25">
            <Card
              title="Trading log"
              icon={<i className="fas fa-table"></i>}
              extraClasses="flex-fill bd-highlight"
              renderNoBody
            >
              <TradingHistory />
            </Card>
          </div>
        </div>
      </Aux>
    );
  }
}

export default TradingPlatform;
