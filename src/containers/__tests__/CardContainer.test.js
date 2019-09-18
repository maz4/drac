import React from 'react';
import { render, wait } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import axiosMock from 'axios';

import reducers from '../../reducers/reducers';
import App from '../../components/App';

afterEach(() => {
  axiosMock.get.mockClear();
});

jest.mock('axios', () => {
  return {
    get: jest.fn((url) => {
      const param = url.split('=')[1];
      const dataId = {
        data: {
          ImageUrls: 'link1',
          Title: 'title 1',
          Description: 'description 1',
        }
      }
      return Promise.resolve(param === 'one' ? dataId : null)
    })
  };
});


test('it should render card with title, description and button', async () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  let history = createMemoryHistory({initialEntries: ['/card/one']});
  const { queryByText, queryAllByText, queryByAltText, queryByTestId } = render(
    <Provider store={store} >
      <Router history={history} >
        <App />
      </Router>
    </Provider>
  );

  expect(queryByTestId("spinner")).toBeInTheDocument();

  await wait(() => expect(queryAllByText(/title 1/i)).toHaveLength(1));
  
  expect(queryByAltText(/title 1/i)).toBeInTheDocument();
  expect(queryByText(/description/i)).toBeInTheDocument();
  expect(queryByText(/buy me/i)).toBeInTheDocument();

});

test('it should render error message on server error responce', async () => {
  axiosMock.get.mockRejectedValueOnce({});
  const store = createStore(reducers, applyMiddleware(thunk));
  const history = createMemoryHistory({initialEntries: ['/card/one']});
  const {getByTestId, queryByTestId } = render(
    <Provider store={store} >
      <Router history={history} >
        <App />
      </Router>
    </Provider>
  );

  await wait(() => getByTestId('data-error'));

  expect(queryByTestId('data-error')).toHaveTextContent("Upss... Something went wrong. Please refresh your page.");
});