import axios from "axios";
import EventList from "../../components/event-card/EventCard";
import Link from "next/link";

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

export default async function EventsPage({ searchParams }) {
    const events = await getAllEvents();
    const userId = searchParams.userId; // Extract user ID from query parameters

    return (
        <div>
            <h1>All Events</h1>
            {userId ? (
                <Link href={`/create-event?userId=${userId}`}>
                    <button>Create Event</button>
                </Link>
            ) : (
                <p>You must be logged in to create an event.</p>
            )}
            {events.length > 0 ? (
                <EventList events={events} />
            ) : (
                <p>No events available.</p>
            )}
        </div>
    );
}
