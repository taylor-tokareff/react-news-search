import React from 'react';
import PropTypes from 'prop-types';

const ArticleList = ({ query }) => (
  <>
    <div>You searched for {query}</div>

  </>
);

ArticleList.propTypes = {
  query: PropTypes.string.isRequired

};

export default ArticleList;
