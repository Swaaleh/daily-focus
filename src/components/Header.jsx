import { useAuth } from "../context/AuthContext";

export default function Header({ title }) {
  const { user, logout } = useAuth();
  
  const styles = {
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      position: "relative" // Needed for absolute positioning
    },
    header: {
      textAlign: "center",
      color: "#5D5E61",
      fontSize: "24px", 
      fontWeight: "500", 
      marginBottom: "20px",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%", // Ensures proper centering
    },
    logoutButton: {
      padding: "5px 10px",
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginLeft: "auto", // Pushes to right
      zIndex: 10 // Ensures it stays above title
    },
    spacer: {
      width: "80px", // Same as button width for balance
      visibility: "hidden" // Maintains space invisibly
    }
  };

  return (
    <div style={styles.headerContainer}>
      {/* Invisible spacer for layout balance */}
      <div style={styles.spacer}>
        {user && "Spacer"}
      </div>
      
      <h1 style={styles.header}>{title}</h1>
      
      {user && (
        <button 
          onClick={logout} 
          style={styles.logoutButton}
          aria-label="Logout"
        >
          Logout
        </button>
      )}
    </div>
  );
}