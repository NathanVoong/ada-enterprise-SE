"use client";

import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function ProfilePage() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <div>
            <h1>Profile</h1>
            {isLoggedIn ? (
                <div>
                    <img
                        src="/resources/profile-icon.png"
                        alt="Profile Picture"
                        width={100}
                        height={100}
                    />
                    <p>Name: John Doe</p>
                    <p>Email: john.doe@example.com</p>
                </div>
            ) : (
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
            )}
        </div>
    );
}
