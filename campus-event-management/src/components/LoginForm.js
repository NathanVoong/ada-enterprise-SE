import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

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
            const { user, error } = await supabase.auth.signIn({
                email: credentials.email,
                password: credentials.password,
            });
            if (error) throw error;
            console.log(user);
        } catch (error) {
            setError(error.message);
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
