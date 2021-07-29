import React from 'react';
import PropTypes from 'prop-types';
import Article from './ArticleMain';

const ArticleList = ({ query, articles }) => {
  console.log(articles);
  const articleElements = articles.map((article) => (
    <>


      <li key={article.id}>
        <Article
          title={article.title}
          author={article.author}
          description={article.description}

        />

      </li>
    </>

  ));

  return <>
    <div>You searched for {query}</div>
    <ul>{articleElements}</ul>;
  </>;

};

ArticleList.propTypes = {
  query: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired
};

export default ArticleList;
