import { useAuth } from "../context/AuthContext";

export default function Header({title}) {
    const { user, logout } = useAuth();

    const styles = {
        header: {
            textAlign: "center",
            color: "#5D5E61",
            fontSize: "24px", 
            fontWeight: "500", 
            marginBottom: "20px",
        },
    };
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
            }}>
            <h1 style={styles.header}>{title}</h1>
            {user && (
                <button 
                    onClick={logout} 
                    style={{ padding: "5px 10px"      
                    }}>
                    Logout
                </button>
            )}
        </div>
        
    );
};