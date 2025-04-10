import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
    title: "Campus Event Management",
    description: "Manage and participate in campus events.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <AuthProvider>
            <Navbar />
            {children}
        </AuthProvider>
        </body>
        </html>
    );
}
