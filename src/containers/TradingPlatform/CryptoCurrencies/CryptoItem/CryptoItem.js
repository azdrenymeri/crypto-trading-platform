import React from "react";

const CryptoItem = ({ crypto, click }) => {
  return (
    <tr key={crypto.symbol} onClick={click}>
      <td>
        <span
          className={["crypto-icon colored", crypto.symbol.toLowerCase()].join(
            " "
          )}
        ></span>{" "}
        &nbsp;&nbsp;&nbsp;{crypto.name}{" "}
      </td>
      <td> { crypto.price } </td>
    </tr>
  );
};

export default CryptoItem;
