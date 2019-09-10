import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import reducers from '../../reducers/reducers';
import App from '../../components/App';

jest.mock('axios', () => {
    return {
        get: jest.fn(() => Promise.resolve({
            data: {
                Products: [{
                    Title: "title 1",
                    ProductImage: {
                        Link: {
                            Href: "link1",
                        }
                    },
                    MoonpigProductNo: "one",
                    Description: "description 1"
                },
                {
                    Title: "title 2",
                    ProductImage: {
                        Link: {
                            Href: "link2",
                        }
                    },
                    MoonpigProductNo: "two",
                    Description: "description 2"
                },
                {
                    Title: "title 3",
                    ProductImage: {
                        Link: {
                            Href: "link3",
                        }
                    },
                    MoonpigProductNo: "three",
                    Description: "description 3"
                }]
            }
        }))
    };
});

test('Should render Card list on the main', async () => {
    const store = createStore(reducers);
    const history = createMemoryHistory({initialEntries: ['/']})
    const {getByAltText, queryByTestId, queryByText, queryAllByText} = render(
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    );
    expect(queryByTestId("spinner")).toBeInTheDocument();

    expect(queryAllByText(/title\/s/i)).toHaveLength(0);

    await wait(()=>expect(queryAllByText(/title\s/i)).toHaveLength(3))

    expect(getByAltText('title 1')).toBeInTheDocument();
    expect(queryAllByText(/title\s/i)).toHaveLength(3);
    expect(queryByText('title 1')).toBeInTheDocument();
    
    expect(queryByText('title 2')).toBeInTheDocument();
    expect(getByAltText('title 2')).toBeInTheDocument();
    
    expect(queryByText('title 3')).toBeInTheDocument();
    expect(getByAltText('title 3')).toBeInTheDocument();

    fireEvent.click(getByAltText('title 1'));
    
    expect(history.location.pathname).toBe("/card/one");
});

