import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import PreviewPage from './pages/PreviewPage';

const App = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/preview" element={<PreviewPage />} />
  </Routes>
);

export default App;
