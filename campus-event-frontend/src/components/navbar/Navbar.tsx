"use client";

import React, {useContext} from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"; // Import CSS Module
import {useRouter} from "next/navigation";
import {AuthContext} from "@/context/AuthContext";

const Navbar = () => {
    const {isLoggedIn, user, logout} = useContext(AuthContext);
    const router = useRouter();

    const handleLogout = () => {
        logout(); // Clear authentication state
        router.push("/"); // Redirect to the homepage
    };

    return (
        <nav className={styles.navbar}>
            {/* Left Section */}
            <div className={styles.leftSection}>
                {isLoggedIn ? (
                    <>
                        <Link href={`/?userId=${user?.uuid}`} className={styles.link}>
                            Home
                        </Link>
                        <Link href={`/events?userId=${user?.uuid}`} className={styles.link}>
                            Events
                        </Link>
                    </>
                ) : (<>
                    <Link href="/" className={styles.link}>
                        Home
                    </Link>
                    <Link href="/events" className={styles.link}>
                        Events
                    </Link>
                </>)}
            </div>

            {/* Right Section */}
            <div className={styles.rightSection}>
                {isLoggedIn ? (
                    <>
                        <Link href={`/profile?userId=${user?.uuid}`} className={styles.link}>
                            Profile
                        </Link>
                        <button onClick={handleLogout} className={styles.link}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className={styles.link}>
                            Login
                        </Link>
                        <Link href="/register" className={styles.link}>
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
