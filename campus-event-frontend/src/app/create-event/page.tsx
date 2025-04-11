"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CreateEventPage() {
    const router = useRouter();
    const { user } = React.useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        location: "",
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Ensure the user is logged in
            if (!user) {
                alert("You must be logged in to create an event.");
                return;
            }

            // Send the event creation request to the backend
            await axios.post(`${API_URL}/events`, {
                ...formData,
                organizerId: user.uuid, // Attach the user's UUID as the organizer ID
            });

            alert("Event created successfully!");
            router.push(`/events?userId=${user.uuid}`); // Redirect back to the events page
        } catch (error) {
            console.error("Error creating event:", error);
            alert("Failed to create event. Please try again.");
        }
    };

    return (
        <div>
            <h1>Create Event</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
                        required
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                        }
                        required
                    />
                </label>
                <br />
                <label>
                    Date:
                    <input
                        type="datetime-local"
                        value={formData.date}
                        onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                        }
                        required
                    />
                </label>
                <br />
                <label>
                    Location:
                    <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })
                        }
                        required
                    />
                </label>
                <br />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
}
