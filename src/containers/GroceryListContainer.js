import { connect } from 'react-redux';
import GroceryList from '../components/GroceryList';
import { purchaseGrocery } from '../actions';

// Helper function to return correct set of puppies
const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items;
    case 'SHOW_NOT_PURCHASED':
      return items.filter(item => !item.purchased);
    case 'SHOW_PURCHASED':
      return items.filter(item => item.purchased);
    default:
      return items;
  }
};

// Add puppies prop mapped from state.puppies
const mapStateToProps = state => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  return {
    items: getVisibleItems(state.groceries, state.groceryFilters)
  };
};

// Add the adopt puppy dispatch action to props
const mapDispatchToProps = dispatch => {
  return {
    purchaseGrocery: id => {
      dispatch(purchaseGrocery(id));
    }
  };
};

// Generate the puppy list container which renders
// PuppyList with all the new props
const GroceryListContainer = connect(mapStateToProps, mapDispatchToProps)(
  GroceryList
);

export default GroceryListContainer;
