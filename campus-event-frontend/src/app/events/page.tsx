import axios from "axios";
import EventList from "../../components/event-card/EventCard";
import Link from "next/link";
import styles from "./page.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface SearchParams {
    userId?: string; // Optional since it may not always be provided
}

const getAllEvents = async () => {
    try {
        const response = await axios.get(`${API_URL}/events`);
        return response.data;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
};

export default async function EventsPage({ searchParams }: { searchParams: SearchParams }) {
    const events = await getAllEvents();
    const userId = searchParams.userId; // Extract user ID from query parameters

    return (
        <div className={styles.events}>
            <h1>All Events</h1>
            {userId ? (
                <Link href={`/create-event?userId=${userId}`}>
                    <button className={styles.createEventButton}>Create Event</button>
                </Link>
            ) : (
                <p>You must be logged in to create an event.</p>
            )}
            {events.length > 0 ? (
                <div className={styles.eventList}>
                    <EventList events={events} />
                </div>
            ) : (
                <p>No events available.</p>
            )}
        </div>
    );
}
