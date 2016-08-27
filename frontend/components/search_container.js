import { connect } from 'react-redux';
import Search from './search';
import { updateBounds } from '../actions/filter_actions';


const mapStateToProps = (state) => ({
  benches: state.benches
});

const mapDispatchToProps = (dispatch) => ({
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
