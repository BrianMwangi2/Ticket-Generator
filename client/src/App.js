// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventDetails from './pages/EventDetails';
import CreateEventPage from './pages/CreateEventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/create-event" element={<CreateEventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
