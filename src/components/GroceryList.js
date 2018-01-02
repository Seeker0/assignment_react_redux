import React, { PropTypes } from "react";
import GroceryItem from "./GroceryItem";
//import Filters from './Filters'

const GroceryList = ({ items, purchaseItem }) => {
  // Generate the puppy card for each puppy
  const groceryList = items.map(item => (
    <GroceryItem
      item={item}
      key={item.id}
      onPurchaseClick={() => purchaseItem(item.id)}
    />
  ));
  const noItems = <p className="text-muted">Oops no items...</p>;

  // Using Bootstrap 4 card layout
  return (
    <div className="GroceryList container">
      <h1>Grocery Items</h1>
      {/* <Filters /> */}
      <div className="card-deck">
        {items.length > 0 ? groceryList : noItems}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  purchaseItem: PropTypes.func.isRequired
};

export default GroceryList;

