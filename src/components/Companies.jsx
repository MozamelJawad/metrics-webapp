import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCompanies } from '../redux/companies/companiesSlice';

const Companies = () => {
  const [search, setSearch] = useState('');
  const { companies, error, isLoading } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  if (!error) {
    return (
      <>
        <div className="header">
          <p className="title">Companies</p>
          <input
            className="search"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search company by name"
          />
          <div className="header-icon">
            <i className="bi bi-mic-fill" />
            <i className="bi bi-gear-fill" />
          </div>
        </div>
        <div className="cards">
          {
      companies.filter((item) => (search.toLowerCase() === '' ? item : item.symbol.toLowerCase().includes(search))).map((company) => (
        <Link className="link" key={company.symbol} to={`details/${company.symbol}`}>
          <div className="card">
            <i className="bi bi-arrow-right-circle" />
            <span className="company-data">
              <h3 className="symbol">{company.symbol}</h3>
              <p className="founded">{company.founded}</p>
            </span>
          </div>
        </Link>
      ))
}
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

export default Companies;
