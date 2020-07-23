import React from "react";

import { connect } from 'react-redux';
import { addCrypto, addBulkCrypto } from '../../../state/actions/cryptoCurrencyAction';
import { cryptoReducer } from '../../../state/reducers/cryptoCurrencyReducer';
import { store } from '../../../state/store/store';

import {getAllAssets} from '../../../http/assets/assets';

import CryptoItem from './CryptoItem/CryptoItem';

class CryptoCurrencies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos:[]
    }
  }

  cryptoClickHandler = (event) => {
    let refEvent = event.target.parentElement;
    refEvent.classList.add("priceWentDown")

    setTimeout(() => {
      refEvent.classList.remove("priceWentUp","priceWentDown")
    }, 1000);
  }

  async componentDidMount() {
    const response = await getAllAssets();


    let newData = [];
    response.data.data.forEach((crypto) => {

     newData.push({
        id: crypto.id,
        rank: crypto.rank,
        symbol: crypto.symbol,
        name: crypto.id,
        price: crypto.priceUsd
      });

    });

    store.dispatch(addBulkCrypto(newData))
  }

  render() {
    const data = this.props.cryptos.map((crypto, index) => {
      if (index === 0){ return; }
      return (
        <CryptoItem key={index} crypto={crypto} click ={ this.cryptoClickHandler } />
      );
    });

    return (
      <div className="table-responsive table-hover">
        <table className="table table-sm">
          <tbody style={{userSelect:"none"}}>

            {data ? (
              data
            ) : (
              <li className="list-group-item" style={{ color: "red" }}>
                NO DATA
              </li>
            )}

          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    cryptos: state.cryptoReducer.cryptos
  }
}

export default connect(mapStateToProps)(CryptoCurrencies);
