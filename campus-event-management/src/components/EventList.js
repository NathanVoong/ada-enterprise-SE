import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data, error } = await supabase
                .from('events')
                .select('*');
            if (error) console.error(error);
            else setEvents(data);
            setLoading(false);
        };
        fetchEvents();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Upcoming Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
