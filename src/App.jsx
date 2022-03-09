import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages';
import Category from './pages/category';
import './style.app.css';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}
