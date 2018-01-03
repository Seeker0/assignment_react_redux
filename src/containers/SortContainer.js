import { connect } from 'react-redux';
import { setSortGrocery } from '../actions';
import Sorters from '../components/Sorters';

// Compare the current filter in state to the filter
// link container's own prop of filter to see if it
// is the active one
const mapStateToProps = (state, ownProps) => {
  return {
    active: state.groceryFilters.sorters === ownProps.sorter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: e => {
      // Don't reload the page
      e.preventDefault();
      // Pass in the filter for that link to set it in the store
      dispatch(setSortGrocery(ownProps.sorter));
    }
  };
};

const SortContainer = connect(mapStateToProps, mapDispatchToProps)(Sorters);

export default SortContainer;
