import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signin', credentials);
            console.log(response.data);
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Network Error');
        }
    };

    return (
        <div>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" required />
                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
