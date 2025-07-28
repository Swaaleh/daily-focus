
import{BrowserRouter as Router, Routes,Route, NavLink} from "react-router-dom"
import { TodosProvider } from "./context/TodosContext";
import Header from "./components/Header";
import Feedback from "./components/Feedback";
import TodoForm from "./components/TodoForm";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useAuth } from "./context/AuthContext";    
import { useTodos } from "./context/TodosContext";  

export default function App() {
    const { user } = useAuth();
    
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
        activeNavLink: {
          backgroundColor: '#0056b3',
          border: '2px solid #004085'
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
                    {user &&(
                        <>
                        <Feedback />
                        <TodoForm />
                            <nav style={styles.nav}>
                                <NavLink to="/" style={({isActive})=> isActive ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}>All Tasks</NavLink>
                                <NavLink to="/active" style={({isActive})=> isActive ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}>Active</NavLink>
                                <NavLink to="/completed" style={({isActive})=> isActive ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}>Completed</NavLink>
                            </nav>
                        </>
                    )}
                <AnimatedRoutes />
                </div>
            </Router>
        </TodosProvider>
    );
}