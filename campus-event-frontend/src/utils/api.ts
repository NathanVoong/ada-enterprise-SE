import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getAllEvents = async () => {
    try {
        const response = await axios.get(`${API_URL}/events`);
        return response.data;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
};

export const registerForEvent = async (userId: string, eventId: string) => {
    try {
        const response = await axios.post(`${API_URL}/registrations`, {
            userId,
            eventId,
        });
        return response.data;
    } catch (error) {
        console.error("Error registering for event:", error);
        throw error;
    }
};
