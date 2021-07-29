import React, { Component } from 'react';
import SearchControls from '../components/controls/Search';
import ArticleList from '../components/display/ArticleList';

export default class NewsSearch extends Component {
  state = {
    query: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <>
        <SearchControls
          query={query}
          onChange={this.handleChange}
        />

        <ArticleList
          query={query}
        />
      </>
    );
  }
}

