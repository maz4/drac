import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CardComponent from '../CardComponent';

afterEach(()=> {
    cleanup();
})

test('shows card component with', () => {
    const imgUrl = 'http://thisislink.com/';
    const anchoreUrl = 'http://thisislink.com/';
    const imgDesc = 'card description';
    const cardTitle = 'Nice card'
    const { container, queryByText } = render(<CardComponent cardUrl={anchoreUrl} imgLink={imgUrl} imgDesc={imgDesc} title={cardTitle}/>);
    const img = container.querySelector('img');
    const title = queryByText(/nice card/i);
    const anchore = container.querySelector('a');
    expect(anchore.href).toBe(anchoreUrl);
    expect(img.src).toBe(imgUrl);
    expect(img.alt).toBe(imgDesc);
    expect(title).toBeDefined();
});