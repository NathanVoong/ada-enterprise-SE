import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEventPage from './pages/CreateEventPage';
import EventsPage from './pages/EventsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import './assets/styles/App.css';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/create-event" element={<CreateEventPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<EventsPage />} /> {/* Default route */}
            </Routes>
        </Router>
    );
};

export default App;
