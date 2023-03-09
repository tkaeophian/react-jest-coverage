import { render, screen } from '@testing-library/react';

import App from './App';
import { BrowserRouter } from "react-router-dom"

const MockApp = () => {
    return <BrowserRouter>
        <App/>
    </BrowserRouter>
}

it('should render todo title', () => {
  render(<MockApp />);
  const todoElement = screen.getByText(/todo/i);
  expect(todoElement).toBeInTheDocument();
});
