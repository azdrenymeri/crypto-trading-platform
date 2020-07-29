import React, { Suspense } from "react";

// import { pricesSocket } from '../../../ws/prices';  // the web socket
// import { tradesSocket } from "../../../ws/trades";
// import { pricesSocket } from "../../../ws/prices";

import Spinner from "../../../components/UI/Spinner/Spinner";
import Card from "../../../components/UI/Card/Card";
// import CandleStickChart from './CandleStickChart/CandleStickChart';

const CandleStickChartAsync = React.lazy(() => {
  return import("./CandleStickChart/CandleStickChart");
});

class ChartContainer extends React.Component {
  componentWillMount() {
    // listening on the requests from the server
    // pricesSocket.addEventListener("message", (msg) =>{
    //   console.log(msg.data);
    // });
    // setTimeout(() => {pricesSocket.close()}, 5000);
    // tradesSocket.addEventListener("message", (msg) => {
    //   console.log(msg.data);
    // });
    // close the socket connection
    // setTimeout(()=> {tradesSocket.close()}, 10000)
  }

  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Card extraClasses="flex-fill bd-highlight overflow-hidden">
          <div className="card-header py-2">
            <div
              className="d-inline-block"
              id="chartContainer"
              data-toggle="dropdown"
            >
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
            </div>
            <div className="dropdown-menu" aria-labelledby="chartContainer">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </div>
          <div
            className="d-inline-block ml-2"
            style={{ verticalAlign: "middle" }}
          >
            Chart Container
          </div>
          </div>
          <CandleStickChartAsync height="92%" />
        </Card>
      </Suspense>
    );
  }
}

export default ChartContainer;
