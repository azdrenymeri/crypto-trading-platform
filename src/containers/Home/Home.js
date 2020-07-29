import React from 'react';

const Home = (props) => {
  return (
    <div className="flex-column bd-highlight" style={{width:"100%"}}>
      <h3 className="bd-highlight">Wellcome To Crypto Trading Platform</h3>
      <h4 className="bd-highlight">A platform where you can:</h4>
      <ul className="bd-highlight">
        <li>Whatch the crypto prices on realtime</li>
        <li>Track global trades</li>
        <li>Start trading</li>
      </ul>
    </div>
  );
};
export default Home;
