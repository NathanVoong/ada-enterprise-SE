import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const RegistrationForm = () => {
    const [participant, setParticipant] = useState({ name: '', email: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setParticipant({ ...participant, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase
                .from('participants')
                .insert([{ name: participant.name, email: participant.email }]);
            if (error) throw error;
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={participant.name} onChange={handleChange} placeholder="Your Name" required />
                <input type="email" name="email" value={participant.email} onChange={handleChange} placeholder="Your Email" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
