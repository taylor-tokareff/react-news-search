import React from 'react';
import PropTypes from 'prop-types';

const SearchControls = ({ query, onChange }) => (
  <>
    <label htmlFor="query">Search for article here</label>
    <input
      id="query"
      type="text"
      placeholder="Search Here"
      name="query"
      value={query}
      onChange={onChange}
    />
  </>
);

SearchControls.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchControls;
