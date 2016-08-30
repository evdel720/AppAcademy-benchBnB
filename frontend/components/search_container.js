import { connect } from 'react-redux';
import Search from './search';
import { updateBounds, updateFilter } from '../actions/filter_actions';


const mapStateToProps = (state) => ({
  benches: state.benches,
  minSeating: state.filters.minSeating,
  maxSeating: state.filters.maxSeating,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
