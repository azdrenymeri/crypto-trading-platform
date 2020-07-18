import React from "react";

import {getAllAssets} from '../../../http/assets/assets'; 

class CryptoCurrencies extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cryptos:[]
    }
  }

  async componentDidMount(){
   const response = await getAllAssets();
  
   let newData = [];
   response.data.data.forEach(crypto => {
     newData.push({
       id: crypto.id,
       rank: crypto.rank,
       symbol: crypto.symbol,
       name: crypto.name
     })
   })
  
  //  setting the state
   this.setState({cryptos: newData});
  }

  render() {

    const data = this.state.cryptos.map(crypto => {
      return(
        <li key={crypto.id} className="list-group-item">
            {crypto.name} - {crypto.symbol}
        </li>
      );
    })


    return (
      <ul className="list-group list-group-flush overflow-auto">
        { data? data:<li className="list-group-item" style={{color:'red'}}>NO DATA</li>}
      </ul>
    );
  }
}

export default CryptoCurrencies;
