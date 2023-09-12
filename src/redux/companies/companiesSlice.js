import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [],
  companyDetails: [],
  isLoading: false,
  status: 'idle',
  error: '',
};

const url = 'https://financialmodelingprep.com/api/v3/nasdaq_constituent';

// const apikey = '2f162b623800cc8074a23cdf992a9690';
const apikey = '6a40b777b442c3a66d2fd258f2f3b27c';

export const getCompanies = createAsyncThunk('companies/getCompanies', async () => {
  const response = await fetch(`${url}?apikey=${apikey}`);
  const data = await response.json();
  return data;
});

export const getCompanyDetails = createAsyncThunk('companies/getCompanyDetails', async (symbol) => {
  const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apikey}`);
  const data = await response.json();
  return data[0];
});

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanies.fulfilled, (state, action) => {
      state.companies = action.payload;
    });
    builder.addCase(getCompanies.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(getCompanies, (state, aciton) => {
      state.isLoading = false;
      state.error = aciton.error.message;
    });

    builder.addCase(getCompanyDetails.fulfilled, (state, action) => {
      state.status = 'succeed';
      state.companyDetails = action.payload;
    });
  },

});

export default companiesSlice.reducer;
