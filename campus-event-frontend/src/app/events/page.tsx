import axios from "axios";
import EventList from "../../components/event-card/EventCard";

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

export default async function EventsPage() {
    const events = await getAllEvents();

    return (
        <div>
            <h1>All Events</h1>
            {events.length > 0 ? (
                <EventList events={events} />
            ) : (
                <p>No events available.</p>
            )}
        </div>
    );
}
