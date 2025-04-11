"use client";

import React, { useContext } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"; // Import CSS Module
import { AuthContext } from "@/context/AuthContext";

const Navbar = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <nav className={styles.navbar}>
            {/* Left Section */}
            <div className={styles.leftSection}>
                <Link href="/" className={styles.link}>
                    Home
                </Link>
                <Link href="/events" className={styles.link}>
                    Events
                </Link>
            </div>

            {/* Right Section */}
            <div className={styles.rightSection}>
                {isLoggedIn ? (
                    <Link href="/profile" className={styles.link}>
                        Profile
                    </Link>
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
