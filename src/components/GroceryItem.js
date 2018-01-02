import React from 'react';
import PropTypes from 'prop-types';
import PurchaseButton from './PurchaseButton';

// Custom card component for each puppy's data
const GroceryItem = ({ item, onPurchaseClick }) => {
  const { name, price, quantity, category, purchased } = item;

  // Using Bootstrap 4 card classes
  return (
    <div className="GroceryItem card" style={{ maxWidth: '320px' }}>
      <div className="card-block">
        <h4>{name}</h4>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{category}</p>
        <PurchaseButton
          purchased={purchased}
          onPurchaseClick={onPurchaseClick}
        />
      </div>
    </div>
  );
};

GroceryItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPurchaseClick: PropTypes.func.isRequired
};

export default GroceryItem;
