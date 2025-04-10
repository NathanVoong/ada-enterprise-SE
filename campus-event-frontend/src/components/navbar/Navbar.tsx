"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

const Navbar = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/events">Events</Link>
                </li>
                <li>
                    {isLoggedIn ? (
                        <Link href="/profile">Profile</Link>
                    ) : (
                        <>
                            <Link href="/login">Login</Link>
                            <Link href="/register">Register</Link>
                        </>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
