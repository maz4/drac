import React from 'react';
import { render, getByText } from '@testing-library/react';
import DescriptionComponent from '../DescriptionComponent';

test('should get title of and description element', () => {
  const { container } = render(
    <DescriptionComponent title={"Title H1"} desc={"Card Description"} />
  );
  const title = container.querySelector('h1');
  const description = container.querySelector('p');
  expect(title.innerHTML).toBe('Title H1');
  expect(description.innerHTML).toBe('Card Description');
});