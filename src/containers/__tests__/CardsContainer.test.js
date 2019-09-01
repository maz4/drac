import React from 'react';
import {render, wait } from '@testing-library/react';
import CardsContainer from '../CardsContainer';

jest.mock('axios', () => {
    return {
        get: jest.fn(() => Promise.resolve({
            data: {
                Products: [{
                    Title: "Photo Upload Card",
                    ProductLink: {
                        Href: "https://products/pu041d/1"
                    },
                    ProductImage: {
                        Link: {
                            Href: "https://api/images/CardShop/1/product/pu041d",
                        }
                    },
                    MoonpigProductNo: "pu041d"
                }]
            }
        }))
    };
});

test('Should render Card on the page load', async () => {
    const {container, getByAltText} = render(<CardsContainer />);
    await wait(() => {});
    const cardImg = getByAltText('Photo Upload Card');
    console.log(container.innerHTML);
    expect(cardImg.alt).toBe('Photo Upload Card');
});

