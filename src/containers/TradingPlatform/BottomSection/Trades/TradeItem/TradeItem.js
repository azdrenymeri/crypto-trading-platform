import React from 'react';

const TradeItem = ({ trade, cssClasses }) => {
  return (
    <tr className={cssClasses? cssClasses: ''} style={{cursor:"pointer"}}>
      <td> {new Date(trade.timestamp).toLocaleString()} </td>
      <td> {trade.base + " / " + trade.quote} </td>
      <td> {trade.direction} </td>
      <td> {trade.price} </td>
      <td> {trade.volume} </td>
      <td> {trade.priceUsd} </td>
    </tr>
  );
};

export default TradeItem;