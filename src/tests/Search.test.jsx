/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import SearchControls from '../components/controls/Search';

describe('SearchControls component', () => {
  it('renders SearchControls', () => {
    const { asFragment } = render(
      <SearchControls text="dog"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
