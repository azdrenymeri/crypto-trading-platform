import React,{Suspense} from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
// import CandleStickChart from './CandleStickChart/CandleStickChart';

const CandleStickChartAsync = React.lazy(() => {
  return import('./CandleStickChart/CandleStickChart');
})


class ChartContainer extends React.Component {

  render(){
    return (
      <Suspense fallback={<Spinner />}>
        <CandleStickChartAsync height="92%" />
      </Suspense>
    );
  }
}

export default ChartContainer;