import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';

describe('Not Found Page: ', () => {
  it('Should render not found page correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
