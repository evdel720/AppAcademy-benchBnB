import React from 'react';
import { selectBenches } from '../util/bench_selector';
import BenchIndexItem from './bench_index_item';

const BenchIndex = ({ benches }) => {
  let benchList = selectBenches(benches).map((bench) => (
    <BenchIndexItem key={bench.id} bench={bench}/>
  ));
  return (
    <ul>
      { benchList }
    </ul>
  );
};

export default BenchIndex;
