"use client";

import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Initialize isLoggedIn and user from cookies if available
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return !!Cookies.get("isLoggedIn"); // Convert to boolean
    });

    const [user, setUser] = useState(() => {
        const storedUser = Cookies.get("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Function to log in the user
    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);

        // Persist login state in cookies
        Cookies.set("isLoggedIn", true, { expires: 7 }); // Expires in 7 days
        Cookies.set("user", JSON.stringify(userData), { expires: 7 });
    };

    // Function to log out the user
    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);

        // Clear login state from cookies
        Cookies.remove("isLoggedIn");
        Cookies.remove("user");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
