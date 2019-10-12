import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';


afterEach(rtl.cleanup)

it('renders without crashing', () => {
	const wrapper = rtl.render( <App />
		)
});

it('renders header with title', () => {
  const wrapper = rtl.render(<App />);
  const h1 = wrapper.queryByText(/women's world cup soccer players/i);
  expect(h1).toBeInTheDocument();
  });

