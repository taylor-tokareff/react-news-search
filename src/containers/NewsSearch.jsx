import React, { Component } from 'react';
import SearchControls from '../components/controls/Search';
import ArticleList from '../components/display/ArticleList';
import { fetchArticles } from '../NewsApi';

export default class NewsSearch extends Component {
  state = {
    query: '',
    articles: [],
    loading: true,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ articles, loading: false });
  }

  render() {
    const { query } = this.state;
    const { articles, loading } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return (
      <>
        <SearchControls
          query={query}
          onChange={this.handleChange}
        />

        <ArticleList
          query={query}
          articles={articles}
        />
      </>
    );
  }
}

