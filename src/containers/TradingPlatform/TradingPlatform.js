import React,{Component,Fragment} from "react";
import { withRouter } from "react-router";

import { connect } from "react-redux";

// import Aux from "../../hoc/Aux/Aux";
// import Card from "../../components/UI/Card/Card";

import CryptoCurrencies from "./CryptoCurrencies/CryptoCurrencies";
import ChartContainer from "./ChartContainer/ChartContainer";
import Trader from "./Trader/Trader";
import BottomSection from "./BottomSection/BottomSection";

class TradingPlatform extends Component {
  render() {
    const BottomSectionWithRouter = withRouter(BottomSection);
    return (
      <Fragment>
        <div
          className="row flex-grow-1 align-self-stretch"
          style={{ height: "80% important!" }}
        >
          {/* cryptos list */}
          <div className="col-12 col-sm-4 col-md-2 d-flex h-75">
            {/* <Card
              title="Crypto Currencies"
              icon={
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-pie-chart"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.5 7.793V1h1v6.5H15v1H8.207l-4.853 4.854-.708-.708L7.5 7.793z"
                  />
                </svg>
              }
              extraClasses="flex-fill bd-highlight"
              renderNoBody
            > */}
              <CryptoCurrencies />
            {/* </Card> */}
          </div>
          {/* the graph */}
          <div className="col-12 col-sm-4 col-md-7 px-0 d-flex">
            {/* <Card
              title="Charts"
              icon={
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-graph-up"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4h-3.5a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              }
              extraClasses="flex-fill bd-highlight overflow-hidden"
              renderNoBody
            > */}
              <ChartContainer />
            {/* </Card> */}
          </div>
          {/* Take action side */}
          <div className="col-12 col-sm-4 col-md-3 d-flex">
            {/* <Card
              title="Take action"
              icon={
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-cash-stack"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z" />
                  <path
                    fill-rule="evenodd"
                    d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"
                  />
                  <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                </svg>
              }
              extraClasses="flex-fill bd-highlight"
            > */}
              <Trader />
            {/* </Card> */}
          </div>

          {/* Bottom  */}
          <div className="col d-flex flex-column bd-highlight h-25">
            {/* <Card
              title="Trading log"
              icon={<i className="fas fa-table"></i>}
              extraClasses="flex-fill bd-highlight"
              renderNoBody
            >
              <TradingHistory />
            </Card> */}

            {/* <BottomSection /> */}
            <BottomSectionWithRouter />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect()(TradingPlatform);
