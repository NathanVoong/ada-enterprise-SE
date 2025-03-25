import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const EventForm = () => {
    const [event, setEvent] = useState({ name: '', date: '', description: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase
                .from('events')
                .insert([{ name: event.name, date: event.date, description: event.description }]);
            if (error) throw error;
            console.log(data);
        } catch (error) {
            console.error('Error creating event:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={event.name} onChange={handleChange} placeholder="Event Name" required />
            <input type="date" name="date" value={event.date} onChange={handleChange} required />
            <textarea name="description" value={event.description} onChange={handleChange} placeholder="Event Description" required />
            <button type="submit">Create Event</button>
        </form>
    );
};

export default EventForm;
