import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form.jsx';

const Search = ({ benches, updateFilter, minSeating, maxSeating }) => {
  return (
    <div>
      <FilterForm minSeating={minSeating}
        maxSeating={maxSeating}
        updateFilter={updateFilter} />
      <BenchMap benches={ benches } updateFilter= {updateFilter} />
      <BenchIndex benches={ benches } />
    </div>
  );
};


export default Search;
