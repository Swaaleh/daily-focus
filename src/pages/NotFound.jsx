import React from "react";

export default function NotFound() {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f9f9f9",
            color: "#333",
        },
        heading: {
            fontSize: "2rem",
            marginBottom: "20px",
        },
        message: {
            fontSize: "1.2rem",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 - Page Not Found</h1>
            <p style={styles.message}>The page you are looking for does not exist.</p>
        </div>
    );
}
