import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ConferenceDetails from './components/ConferenceDetails';
import AdminDashboard from './components/AdminDashboard';
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/conference/:id" element={<ConferenceDetails/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
