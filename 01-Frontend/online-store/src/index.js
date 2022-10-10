import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewInvoce from './pages/NewInvoce';
import ListInvoce from './pages/ListInvoce';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Providers from './pages/Providers';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} >
 
      <Route index path="NewInvoce" element={<NewInvoce />} />
      <Route path="ListInvoce" element={<ListInvoce />} />
      <Route path="Products" element={<Products />} />
      <Route path="Customers" element={<Customers />} />
      <Route path="Providers" element={<Providers />} />
      <Route path="*" element={<PageNotFound />} />
     </Route>
  </Routes>
  </BrowserRouter>,
);


