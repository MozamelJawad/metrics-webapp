import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom';

describe('Header: ', () => {
  it('Should render the header correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Navigation link work correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const homeLink = screen.getByTestId('home');
    expect(homeLink).toBeInTheDocument();
    fireEvent.click(getByTestId('home'));
  });
});
