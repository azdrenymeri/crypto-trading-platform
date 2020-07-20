import React,{Suspense} from 'react';

// import { pricesSocket } from '../../../ws/prices';  // the web socket 
import {tradesSocket} from '../../../ws/trades';
import { pricesSocket } from '../../../ws/prices';

import Spinner from '../../../components/UI/Spinner/Spinner';
// import CandleStickChart from './CandleStickChart/CandleStickChart';

const CandleStickChartAsync = React.lazy(() => {
  return import('./CandleStickChart/CandleStickChart');
})


class ChartContainer extends React.Component {

  componentWillMount(){

    // listening on the requests from the server
    pricesSocket.addEventListener("message", (msg) =>{
      console.log(msg.data);
    });

    setTimeout(() => {pricesSocket.close()}, 5000);
    // tradesSocket.addEventListener("message", (msg) => {
    //   console.log(msg.data);
    // });

    // close the socket connection
    setTimeout(()=> {tradesSocket.close()}, 10000)
  }

  render(){
    return (
      <Suspense fallback={<Spinner />}>
        <CandleStickChartAsync height="92%" />
      </Suspense>
    );
  }
}

export default ChartContainer;