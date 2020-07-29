import React,{Component} from 'react';

import Balance from './Balance/Balance'

class Balances extends Component {

  render(){
    return(
      <ul className="list-group list-group-flush overflow-auto">
        <Balance className="list-group-item-primary " currency="usd" amount="300" />
      </ul>
    )
  }
}


export default Balances;