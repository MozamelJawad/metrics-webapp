import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';
import '@testing-library/jest-dom';

describe('Not Found Page: ', () => {
  it('Should render not found page correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('renders not found component correctly', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
    const headingElement = screen.getByText('Page Not Found');
    expect(headingElement).toBeInTheDocument();

    const linkToHome = screen.getByRole('link');
    expect(linkToHome).toBeInTheDocument();
    expect(linkToHome.getAttribute('href')).toBe('/');
  });
});
