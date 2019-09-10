import React from 'react';
import { render, wait } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';

import reducers from '../../reducers/reducers';
import CardContainer from '../CardContainer';

jest.mock('axios', () => {
  return {
    get: jest.fn( () => Promise.resolve({
      data: {
        ImageUrls: 'link1',
        Title: 'title 1',
        Description: 'description 1',
      }
    }))
  };
});


test('it should render card with title, description and button', async () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  const history = createMemoryHistory({initialEntries: ['/one/']})
  const { getByText, queryByText, getByAltText, queryByTestId } = render(
    <Provider store={store} >
      <Router history={history} >
        <CardContainer />
      </Router>
    </Provider>
  );
  wait();
  expect(queryByTestId("spinner")).toBeInTheDocument();

  await wait(() => queryByText(/title\s/i));
  expect(getByAltText(/title\s/i)).toBeInTheDocument();
  expect(getByText(/description/i)).toBeInTheDocument();
  expect(getByText(/buy\sme/i)).toBeInTheDocument();
});