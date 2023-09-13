import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CompanyDetails from '../components/CompanyDetails';
import store from '../redux/store';
import '@testing-library/jest-dom';

describe('Company Details: ', () => {
  it('Should render all the components of company details', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CompanyDetails />
        </BrowserRouter>
      </Provider>,
    );
    const companyDetails = screen.getByTestId('companyDetails');
    expect(companyDetails).toBeInTheDocument();
    const sybmol = screen.getByText('Symbol');
    expect(sybmol).toBeInTheDocument();
  });
});
