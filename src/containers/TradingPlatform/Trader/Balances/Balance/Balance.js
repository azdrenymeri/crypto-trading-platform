import React from "react";
import PropTypes from "prop-types";

const Balance = (props) => {
  return (
    <li
      className={[
        "list-group-item",
        "list-group-item-action",
        props.className ? props.className : "",
      ].join(" ")}

      style={{cursor:"pointer"}}
    >
      {formatUsdBalance(props.currency, props.amount)}
    </li>
  );
};

const formatUsdBalance = (currency, amount) => {
  switch (currency) {
    case "eur":
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(amount);
    case "usd":
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
  }
  return "Wrong";
};

Balance.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.oneOf(["eur", "usd"]),
};
export default Balance;
