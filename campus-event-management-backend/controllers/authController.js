import { supabase } from '../utils/supabaseClient.js';

export const signUp = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const { user, error } = await supabase.auth.signIn({ email, password });
        if (error) throw error;
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};
