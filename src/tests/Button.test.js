import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

test('renders Search button', () => {
  render(<Header />);
  const buttonElement = screen.getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick handler when Search button is clicked', () => {
  const handleSearchClick = jest.fn();
  render(<Header />);
  const buttonElement = screen.getByText(/Search/i);
  buttonElement.onclick = handleSearchClick;
  fireEvent.click(buttonElement);
  expect(handleSearchClick).toHaveBeenCalledTimes(1);
});