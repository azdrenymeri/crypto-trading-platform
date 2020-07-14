import React from 'react';


import Aux from '../../hoc/Aux/Aux';

import Card from '../../components/UI/Card/Card';

class TradingPlatform extends React.Component {

  render(){
    return(<Aux>
      <div className="uk-grid-small" uk-grid="">
        <div className="uk-child-width-1-4" style={{display:"inline-block"}}>
        <Card title="Crypto Currencies">
          <span>Crypto</span>
        </Card>

        </div>
        <div className="uk-child-width-2-4" style={{display:"inline-block"}}>
        <Card title="Crypto Currencies">
          <span>Crypto</span>
        </Card>

        </div>
        <div className="uk-child-width-1-4" style={{display:"inline-block"}}>
        <Card title="Crypto Currencies">
          <span>Crypto</span>
        </Card>

        </div>
      </div>

    </Aux>)
  }
}

export default TradingPlatform;