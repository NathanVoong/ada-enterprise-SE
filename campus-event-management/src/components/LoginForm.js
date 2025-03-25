import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { user, error } = await supabase.auth.signIn({
            email: credentials.email,
            password: credentials.password,
        });
        if (error) console.error(error);
        else console.log(user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
