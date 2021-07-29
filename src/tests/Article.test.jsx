/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Article from '../components/display/ArticleMain';

describe('Article component', () => {
  it('renders Article', () => {
    const { asFragment } = render(
      <Article
        title="Test title"
        description="Test description"
        author="Test author"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});