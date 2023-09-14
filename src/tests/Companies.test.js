import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Companies from '../components/Companies';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('Companies components: ', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      companies: {
        companies: [
          { symbol: 'AAPL', founded: 1976 },
          { symbol: 'GOOGL', founded: 1998 },
          { symbol: 'MSFT', founded: 1975 },
        ],
        error: null,
        isLoading: false,
      },
    });

    store.dispatch = jest.fn();
  });

  test('renders header and company cards correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Companies />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('Companies')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search company by name')).toBeInTheDocument();

    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('GOOGL')).toBeInTheDocument();
    expect(screen.getByText('MSFT')).toBeInTheDocument();
  });

  test('dispatches getCompanies action on component mount', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Companies />
        </BrowserRouter>
      </Provider>,
    );

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  test('filters company cards based on search input', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Companies />
        </BrowserRouter>
      </Provider>,
    );

    // Check if all company cards are initially rendered
    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('GOOGL')).toBeInTheDocument();
    expect(screen.getByText('MSFT')).toBeInTheDocument();

    // Simulate typing in the search input
    fireEvent.change(screen.getByPlaceholderText('Search company by name'), { target: { value: 'GOOGL' } });

    // Check if only the card with 'GOOGL' symbol is rendered
    expect(screen.queryByText('AAPL')).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue('GOOGL')).toBeInTheDocument();
    expect(screen.queryByText('MSFT')).not.toBeInTheDocument();
  });

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
