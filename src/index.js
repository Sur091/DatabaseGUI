import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Database from './Database/Database'; // Your other page component

const root = ReactDOM.createRoot(document.getElementById('root'));
const data = {
  "Username": ["John", "Suraj"],
  "ID":["01", "12"],
};
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Database" element={<Database data={data}/>} />
      {/* Add additional routes for other pages */}
    </Routes>
  </BrowserRouter>
);

