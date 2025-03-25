import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const RegistrationForm = () => {
    const [participant, setParticipant] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setParticipant({ ...participant, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('participants')
            .insert([{ name: participant.name, email: participant.email }]);
        if (error) console.error(error);
        else console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={participant.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="email" value={participant.email} onChange={handleChange} placeholder="Your Email" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
