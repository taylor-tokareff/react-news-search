import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Article = ({ title, author, description }) => (
  <div>

    {/* link title */}
    <p>{title}</p>
    <p>{author}</p>
    <p>{description}</p>

  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
