import TodoItem from './TodoItem';

export default function TodoList({
    todos,
    handleToggleComplete,
    handleEditTodo,
    handleRemoveTodo
}) {
    return(
        <ul aria-label="Tasks list" style={{ listStyleType: "none", padding: "0" }}>
            {todos.length === 0 && (
                <li style={{textAlign: "center", color:  "#888", fontStyle: "italic"}}>
                    No task found, add one.
                </li>
            )}
            {todos.map((todo) => (
                <TodoItem
                key={todo.id}
                todo={todo}
                handleToggleComplete={handleToggleComplete}
                handleEditTodo={handleEditTodo}
                handleRemoveTodo={handleRemoveTodo}
                />
            ))}
        </ul>
    );
}