import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Movies from './components/movies';
import Moviedetail from './components/moviedetail/moviedetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Movies />} />
        <Route path="/moviedetail/:userid" element={<Moviedetail />} />
        {/* Aap yahan aur routes add kar sakte hain */}
      </Route>
    </Routes>
  </Router>
);

