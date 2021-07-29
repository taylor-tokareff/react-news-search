/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from '../components/display/ArticleList';

const TestArticleList = [
  {
    title: 'Test title 1',
    description: 'Test description 1',
    author: 'Test author 1',
    url: 'testurl1.com',
    image: 'testimage1.com'
  },
  {
    title: 'Test title 2',
    description: 'Test description 2',
    author: 'Test author 2',
    url: 'testurl2.com',
    image: 'testimage2.com'
  },
];


describe('ArticleList component', () => {
  it('renders ArticleList', () => {
    const { asFragment } = render(
      <ArticleList articles={TestArticleList}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
