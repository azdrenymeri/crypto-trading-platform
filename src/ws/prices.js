const assets = ['bitcoin','ethereum','tether','ripple','bitcoin-cash',
                'cardano','bitcoin-sv','litecoin','binance-coin', 'chainlink',
                'eos','tezos','stellar','tron','monero','unus-sed-leo','usd-coin',
                'vechain','cosmos','neo','huobi-token','iota','dash','ethereum-classic',
                'zcash','maker','ontology','nem','dogecoin']
const pricesSocket = new WebSocket("wss://ws.coincap.io/prices?assets="+assets.join(','));
export { pricesSocket };