import React from "react";

const About = (props) => {
  return (
    <div className="flex-fill bd-highlight" style={{ textAlign: "center" }}>
      <h1>About Crypto Trading Platform</h1>
      <div style={{ fontSize: "1.2rem" }}>
        <p>
          A simple platform where you can track the prices of different crypto
          currencies, buy cryptos, sell them etc.
        </p>
        <p>The platform is build with reactjs</p>
      </div>
    </div>
  );
};

export default About;
