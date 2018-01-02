import React, { PropTypes } from "react";
import Button from "./elements/Button";

const PurchaseButton = ({ available, onPurchaseClick }) => {
  if (!purchased) {
    return <p className="text-muted">Purchased!</p>;
  }

  return (
    <Button onClick={onAdoptClick} color="success">
      Purchase!
    </Button>
  );
};

PurchaseButton.propTypes = {
  purchased: PropTypes.bool.isRequired,
  onPurchaseClick: PropTypes.func.isRequired
};

export default PurchaseButton;

