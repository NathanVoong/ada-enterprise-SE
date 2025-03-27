import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
    const [event, setEvent] = useState({ name: '', date: '', description: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/events', event);
            console.log(response.data);
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Network Error');
        }
    };

    return (
        <div>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={event.name} onChange={handleChange} placeholder="Event Name" required />
                <input type="date" name="date" value={event.date} onChange={handleChange} required />
                <textarea name="description" value={event.description} onChange={handleChange} placeholder="Event Description" required />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default EventForm;
