import React from "react";
import PropTypes from "prop-types";
import GroceryItem from "./GroceryItem";
import Filters from "./Filters";

const GroceryList = ({ items, purchaseGrocery }) => {
  // Generate the puppy card for each puppy
  const groceryList = items.map(item => (
    <GroceryItem
      item={item}
      key={item.id}
      onPurchaseClick={() => purchaseGrocery(item.id)}
    />
  ));
  const noItems = <p className="text-muted">Oops no items...</p>;

  // Using Bootstrap 4 card layout
  return (
    <div className="GroceryList container">
      <h1>Grocery Items</h1>
      <Filters />
      <div className="card-deck">
        {items.length > 0 ? groceryList : noItems}
      </div>
    </div>
  );
};

GroceryList.propTypes = {
  items: PropTypes.array.isRequired,
  purchaseGrocery: PropTypes.func.isRequired
};

export default GroceryList;
