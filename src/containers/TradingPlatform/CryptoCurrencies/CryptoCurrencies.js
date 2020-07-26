import React from "react";

import { connect } from "react-redux";
import {
  addBulkCrypto,
  updateCryptoPrice
} from "../../../state/actions/cryptoCurrencyAction";
import { store } from "../../../state/store/store";

import { getAllAssets } from "../../../http/assets/assets";
import { pricesSocket } from "../../../ws/prices";

import CryptoItem from "./CryptoItem/CryptoItem";

class CryptoCurrencies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: [],
    };
  }

  cryptoClickHandler = (event) => {
    let refEvent = event.target.parentElement;
    refEvent.classList.add("priceWentDown");

    setTimeout(() => {
      refEvent.classList.remove("priceWentUp", "priceWentDown");
    }, 1000);
  };

  triggerPriceChangeAnimation = (name, price) =>{
    try {
      const cryptoRow = document.getElementById(name)
      let oldPrice = parseFloat(cryptoRow.lastChild.innerText);
      let newPrice = parseFloat(price);
      cryptoRow.classList.add(oldPrice < newPrice ? "priceWentUp":"priceWentDown");
      
      // make sure to remove the classes
      setTimeout(() => {
        cryptoRow.classList.remove("priceWentUp", "priceWentDown");
      }, 1000);
  
    } catch(err) {
      debugger
    }
  }

  componentWillMount(){
      pricesSocket.addEventListener("message", this.handlePriceChanges);    
  }


  // handle the response from web sockets
  handlePriceChanges = (response) => {
    for(const [key, value] of Object.entries(JSON.parse(response.data))) {          
      this.triggerPriceChangeAnimation(key, value);
      store.dispatch(updateCryptoPrice(key, value));
    }
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
        price: crypto.priceUsd,
      });
    });

    store.dispatch(addBulkCrypto(newData));
  }

  componentWillUnmount(){
    pricesSocket.removeEventListener("message", this.handlePriceChanges);
  }

  render() {
    const data = this.props.cryptos.map((crypto, index) => {
      return (
        <CryptoItem
          key={index}
          crypto={crypto}
          click={this.cryptoClickHandler}
        />
      );
    });

    return (
      <div className="table-responsive table-hover">
        <table className="table table-sm">
          <tbody style={{ userSelect: "none" }}>
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
  return {
    cryptos: state.cryptoReducer.cryptos,
  };
};

export default connect(mapStateToProps)(CryptoCurrencies);
