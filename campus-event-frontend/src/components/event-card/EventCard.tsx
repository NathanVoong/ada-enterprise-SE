interface Event {
    uuid: string;
    title: string;
    description: string;
    date: string;
    location: string;
    imageUrl: string;
}

interface EventListProps {
    events: Event[];
}

export default function EventList({ events }: EventListProps) {
    return (
        <div>
            {events.length > 0 ? (
                events.map((event) => (
                    <div key={event.uuid} className="event-card">
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                        <p>Location: {event.location}</p>
                    </div>
                ))
            ) : (
                <p>No events available.</p>
            )}
        </div>
    );
}
