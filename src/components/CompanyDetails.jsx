import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCompanyDetails } from '../redux/companies/companiesSlice';
import Header from './Header';

const CompanyDetails = () => {
  const { smbl } = useParams();
  const { companyDetails, isLoading, error } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyDetails(smbl));
  }, [dispatch, smbl]);

  if (!error) {
    return (
      <>
        <Header />
        <div className="companyDetails" data-testid="companyDetails">
          <div className="image">
            <img alt={companyDetails.symbol} src={companyDetails.image} />
          </div>
          <div className="infoTable">
            <table className="tableInfo">
              <tbody>
                <tr>
                  <th>Symbol</th>
                  <td>{companyDetails.symbol}</td>
                </tr>
                <tr>
                  <th>Company Name</th>
                  <td>{companyDetails.companyName}</td>
                </tr>
                <tr>
                  <th>CEO</th>
                  <td>{companyDetails.ceo}</td>
                </tr>
                <tr>
                  <th>Sector</th>
                  <td>{companyDetails.sector}</td>
                </tr>
                <tr>
                  <th>Industry</th>
                  <td>{companyDetails.industry}</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td><a href={companyDetails.website}>{companyDetails.symbol}</a></td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{companyDetails.phone}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{companyDetails.address}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{companyDetails.city}</td>
                </tr>
                <tr>
                  <th>Full Time Employees</th>
                  <td>{companyDetails.fullTimeEmployees}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="message">
        Error:
        { error }
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="message">Looding ...</div>
    );
  }

  return <></>;
};

export default CompanyDetails;
