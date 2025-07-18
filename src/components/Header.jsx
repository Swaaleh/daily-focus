export default function Header({title}) {
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
        <h1 style={styles.header}>{title}</h1>
    );
};