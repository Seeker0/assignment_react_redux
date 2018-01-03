import React, { Component } from 'react';
import GroceryListContainer from '../containers/GroceryListContainer';
import AddGroceryContainer from '../containers/AddGroceryContainer';
import SortContainer from '../containers/SortContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Grocery List</h1>
        <SortContainer />
        <br />
        <GroceryListContainer />
        <br />
        <AddGroceryContainer />
      </div>
    );
  }
}

export default App;
