import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider, MockedProviderProps } from '@apollo/react-testing';
import ListsTodos from '../ListsTodos';

const defaultProps = {};

const renderComponent = ({ mocks, props }: MockedProviderProps & { props: any }) =>
  render(
    <MockedProvider mocks={mocks}>
      <ListsTodos {...defaultProps} {...props} />
    </MockedProvider>
  );

describe('ListTodos', () => {
  it.skip('should ', () => {});
});
