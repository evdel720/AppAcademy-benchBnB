import React from 'react';
import { selectBenches } from '../util/bench_selector';

const BenchIndex = ({ benches }) => {
  let benchList = selectBenches(benches).map((bench) => (
    <li key={bench.id}>
      <span>{ bench.description }</span>
    </li>
  ));
  return (
    <ul>
      { benchList }
    </ul>
  );
};

export default BenchIndex;
