import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import ButtonComponent from '../ButtonComponent';

afterEach(()=>{
  cleanup();
})

test('should render button', () => {
  const {container} = render(<ButtonComponent />);
  const button =  container.getByText('Buy Me');
  expect(button.innerHTML).toBe('');
});


