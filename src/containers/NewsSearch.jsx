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

  handleSearch = async ({ target }) => {
    this.setState({ [target.name]: target.value, loading: true });
    const articles = await fetchArticles(this.state.query);
    this.setState({ articles, loading: false });
  };

  async componentDidMount() {
    const articles = await fetchArticles(this.state.query);
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
          onChange={this.handleSearch}
        />

        <ArticleList
          query={query}
          articles={articles}
        />
      </>
    );
  }
}

