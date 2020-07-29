import React from "react";

import { connect } from "react-redux";
import {
  addBulkCrypto,
  updateCryptoPrice,
} from "../../../state/actions/cryptoCurrencyAction";
import { store } from "../../../state/store/store";

import Card from "../../../components/UI/Card/Card";

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

  triggerPriceChangeAnimation = (name, price) => {
    try {
      const cryptoRow = document.getElementById(name);
      let oldPrice = parseFloat(cryptoRow.lastChild.innerText);
      let newPrice = parseFloat(price);
      cryptoRow.classList.add(
        oldPrice < newPrice ? "priceWentUp" : "priceWentDown"
      );

      // make sure to remove the classes
      setTimeout(() => {
        cryptoRow.classList.remove("priceWentUp", "priceWentDown");
      }, 1000);
    } catch (err) {
      debugger;
    }
  };

  componentWillMount() {
    pricesSocket.addEventListener("message", this.handlePriceChanges);
  }

  // handle the response from web sockets
  handlePriceChanges = (response) => {
    for (const [key, value] of Object.entries(JSON.parse(response.data))) {
      this.triggerPriceChangeAnimation(key, parseFloat(value).toPrecision(11));
      store.dispatch(updateCryptoPrice(key, parseFloat(value).toPrecision(11)));
    }
  };

  async componentDidMount() {
    const response = await getAllAssets();

    let newData = [];
    response.data.data.forEach((crypto) => {
      newData.push({
        id: crypto.id,
        rank: crypto.rank,
        symbol: crypto.symbol,
        name: crypto.id,
        price: parseFloat(crypto.priceUsd).toPrecision(11),
      });

    });

    store.dispatch(addBulkCrypto(newData));
  }

  componentWillUnmount() {
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
      <Card extraClasses="flex-fill bd-highlight">
        <div className="card-header py-2">
          <div
            className="d-inline-block"
            id="crypto currencies"
            data-toggle="dropdown"
          >
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
          </div>
          <div className="dropdown-menu" aria-labelledby="crypto currencies">
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
            Crypto Currencies
          </div>
        </div>
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
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cryptos: state.cryptoReducer.cryptos,
  };
};

export default connect(mapStateToProps)(CryptoCurrencies);
