const pricesSocket = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin");
export { pricesSocket };