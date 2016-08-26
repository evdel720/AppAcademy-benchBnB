import { connect } from 'react-redux';
import Search from './search';


const mapStateToProps = (state) => ({
  benches: state.benches
});

export default connect(mapStateToProps)(Search);
