import React from "react";

import Aux from "../../hoc/Aux/Aux";
import Card from "../../components/UI/Card/Card";

class TradingPlatform extends React.Component {
  render() {
    return (
      <Aux>
        <div className="m-3">
          <div className="row">
            {/* cryptos list */}
            <div className="col-12 col-sm-4 col-md-3">
              <Card title="Crypto Currencies" icon={<i class="fab fa-btc"></i>}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
              </Card>
            </div>
            {/* the graph */}
            <div className="col-12 col-sm-4 col-md-6 px-0 d-flex align-self-stretch">
              <Card title="Charts" icon={<i class="far fa-chart-bar"></i>}>
                Crypto
              </Card>
            </div>
            {/* Take action side */}
            <div className="col-12 col-sm-4 col-md-3">
              <Card title="Take action">Crypto</Card>
            </div>

            {/* Bottom  */}
            <div className="col">
              <Card title="Trading log" icon={<i class="fas fa-table"></i>}>
                Trading log
                </Card>
            </div>
          </div>
        </div>
        {/* <div className="uk-column-1-4">
    
        </div>
        <div className="uk-column-1-3">
        

        </div>
        <div className="uk-column-1-4">
        <Card title="Crypto Currencies">
          <span>Crypto</span>
        </Card>

        </div> */}
      </Aux>
    );
  }
}

export default TradingPlatform;
