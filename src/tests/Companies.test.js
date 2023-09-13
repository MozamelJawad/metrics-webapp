import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Companies from '../components/Companies';
import '@testing-library/jest-dom';

describe('Companies list: ', () => {
  test('Should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Companies />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
