import { connect } from "react-redux";
import FilterLink from "../components/FilterLink";
import { setPurchasedFilter } from "../actions";
import { filterGrocery } from "../actions";

// Compare the current filter in state to the filter
// link container's own prop of filter to see if it
// is the active one
const mapStateToProps = (state, ownProps) => {
  return {
    active: state.groceryFilters === ownProps.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: e => {
      // Don't reload the page
      e.preventDefault();
      // Pass in the filter for that link to set it in the store
      dispatch(setPurchasedFilter(ownProps.filter));
      dispatch(filterGrocery(ownProps.filter));
    }
  };
};

const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(
  FilterLink
);

export default FilterLinkContainer;
