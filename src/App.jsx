
import { useState, useEffect } from "react";
import{Routes, Route, NavLink, Link} from "react-router-dom"
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Feedback from "./components/Feedback";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosProvider } from "./context/TodosContext";

export default function App() {
    
    const styles = {
        container: {
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(231, 113, 113, 0.1)",
        },
        nav: {
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
            gap: "15px",
        },
        navLink: {
            padding: '8px 16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '500',
            '&:hover': {
              backgroundColor: '#0056b3'
            }
          },
          clearButton: {
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: 'block',
            margin: '20px auto 0'
          }
        
    };

    return (
        <TodosProvider>
            <Router>
                <div style={styles.container}>
                    <Header title={"Daily Focus"} />

                    <Feedback />
                    <TodoForm />
                    <nav style={styles.nav}>
                        <Link to="/" style={styles.navLink}>All Tasks</Link>
                        <Link to="/active" style={styles.navLink}>Active</Link>
                        <Link to="/completed" style={styles.navLink}>Completed</Link>
                    </nav>
                </div>
            </Router>
        </TodosProvider>
    );
}