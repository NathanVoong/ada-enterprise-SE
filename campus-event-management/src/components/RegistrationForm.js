import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [participant, setParticipant] = useState({ name: '', email: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setParticipant({ ...participant, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/participants', participant);
            console.log(response.data);
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Network Error');
        }
    };

    return (
        <div>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={participant.name} onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" value={participant.email} onChange={handleChange} placeholder="Email" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
