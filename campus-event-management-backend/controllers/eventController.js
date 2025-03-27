import { supabase } from '../utils/supabaseClient.js';

export const createEvent = async (req, res, next) => {
    const { name, date, description } = req.body;
    try {
        const { data, error } = await supabase
            .from('events')
            .insert([{ name, date, description }]);
        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
};

export const getEvents = async (req, res, next) => {
    try {
        const { data, error } = await supabase
            .from('events')
            .select('*');
        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};
