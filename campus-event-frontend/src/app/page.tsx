import axios from "axios";
import EventList from "../components/event-card/EventCard";
import styles from "./page.module.css";

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

export default async function HomePage() {
    const events = await getAllEvents();

    return (
        <div className={styles.home}>
            <h1>Upcoming Events</h1>
            <EventList events={events} />
        </div>
    );
}
