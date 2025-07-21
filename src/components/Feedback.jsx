import { useTodos } from "../context/TodosContext";     
export default function Feedback() {
    const { feedback } = useTodos();
    if (!feedback.message) return null;

    const style = {
        textAlign: 'center',
        fontSize: "14px",
        marginBottom: "10px",
        color: feedback.type === 'success' ? "#28a745" : "#dc3545",
    };

    return <p style={style}>{feedback.message}</p>
    
}