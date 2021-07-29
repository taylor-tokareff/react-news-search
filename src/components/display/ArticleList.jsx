import React from 'react';
import PropTypes from 'prop-types';
import Article from './ArticleMain';

const ArticleList = ({ query, articles }) => {

  const articleElements = articles.map((article) => (
    <>
      <div>You searched for {query}</div>

      <li key={article.id}>
        <Article
          title={article.title}
          author={article.author}
          description={article.description}

        />

      </li>
    </>

  ));

  return <ul>{articleElements}</ul>;

};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    query: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired
};

export default ArticleList;
