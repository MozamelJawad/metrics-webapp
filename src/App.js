import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Companies from './components/Companies';
import CompanyDetails from './components/CompanyDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Companies />} />
        <Route path="/details/:smbl" element={<CompanyDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
