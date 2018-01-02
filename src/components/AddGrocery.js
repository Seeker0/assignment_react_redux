import React, { PropTypes } from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const AddGrocery = ({ onSubmit }) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>
      Add a Grocery Item{" "}
      <span className="glyphicon glyphicon-search" aria-hidden="true" />
    </h1>
    <InputGroup name="name" labelText="Name">
      <Input name="name" />
    </InputGroup>
    <InputGroup name="price" labelText="Price">
      <Input name="price" />
    </InputGroup>
    <InputGroup name="quantity" labelText="Quantity">
      <Input name="quantity" />
    </InputGroup>
    <InputGroup name="category" labelText="Category">
      <Input name="category" />
    </InputGroup>
    <Button type="submit" color="primary">
      Save Grocery Item
    </Button>
  </form>
);

AddGrocery.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddGrocery;
