import React from 'react';
import FilterLinkContainer from '../containers/FilterLinkContainer';

const Filters = () => (
  <div className="Filters">
    <FilterLinkContainer filter="SHOW_ALL">Show all</FilterLinkContainer>
    {', '}
    <FilterLinkContainer filter="SHOW_NOT_PURCHASED">
      Show Not Purchased
    </FilterLinkContainer>
    {', '}
    <FilterLinkContainer filter="SHOW_PURCHASED">
      Show Purchased
    </FilterLinkContainer>
  </div>
);

export default Filters;
