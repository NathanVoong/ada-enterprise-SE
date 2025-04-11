"use client";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProfilePage() {
    const { isLoggedIn, user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null); // State to store fetched user data
    const [loading, setLoading] = useState(true); // Loading state for API call

    useEffect(() => {
        const fetchUserData = async () => {
            if (!isLoggedIn || !user) {
                setLoading(false);
                return;
            }

            try {
                // Fetch user details from the backend using the user's UUID
                const response = await axios.get(`${API_URL}/users/${user.uuid}`);
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [isLoggedIn, user]);

    if (!isLoggedIn) {
        return (
            <div>
                <h1>Profile</h1>
                <div>
                    <p>You are not logged in.</p>
                    <img
                        src="/resources/generic-profile-icon.png"
                        alt="Generic Profile Picture"
                        width={100}
                        height={100}
                    />
                    <p>Please log in to view your profile.</p>
                    <div>
                        <a href="/login">Login</a> | <a href="/register">Register</a>
                    </div>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div>
                <h1>Profile</h1>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Profile</h1>
            {userData ? (
                <div>
                    <img
                        src="/resources/generic-profile-icon.png"
                        alt="Profile Picture"
                        width={100}
                        height={100}
                    />
                    <p>UserID: {userData.uuid}</p>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                </div>
            ) : (
                <p>Failed to load user data.</p>
            )}
        </div>
    );
}
