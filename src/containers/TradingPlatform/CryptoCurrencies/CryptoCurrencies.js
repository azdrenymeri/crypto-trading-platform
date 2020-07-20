import React from "react";

import { getAllAssets } from "../../../http/assets/assets";

class CryptoCurrencies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: [],
    };
  }

  async componentDidMount() {
    const response = await getAllAssets();

    let newData = [];
    response.data.data.forEach((crypto) => {
      newData.push({
        id: crypto.id,
        rank: crypto.rank,
        symbol: crypto.symbol,
        name: crypto.name,
      });
    });

    //  setting the state
    this.setState({ cryptos: newData });
  }

  render() {
    const data = this.state.cryptos.map((crypto) => {
      return (
        <tr>
          <td>
            <span
              className={[
                "crypto-icon colored",
                crypto.symbol.toLowerCase(),
              ].join(" ")}
            ></span>{" "}
            &nbsp;&nbsp;&nbsp;{crypto.name}{" "}
          </td>
          <td>price goes here</td>
        </tr>
      );
    });

    return (
      <div className="table-responsive">
        <table class="table table-sm">
          <tbody>
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

export default CryptoCurrencies;
