import { supabase } from '../utils/supabaseClient.js';

export const registerParticipant = async (req, res, next) => {
    const { name, email } = req.body;
    try {
        const { data, error } = await supabase
            .from('participants')
            .insert([{ name, email }]);
        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
};
