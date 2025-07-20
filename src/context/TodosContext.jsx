import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodosContext = createContext();

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || [];
  });
  
  const [feedback, setFeedback] = useState({message: "", type: ""});
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim() === "") {
      setFeedback({message: "Please enter a task.", type: "error"}); 
      return;
    }
    const newTodo = {id: uuidv4(), text: todoInput, completed: false};
    setTodos([...todos, newTodo]);
    setTodoInput("");
    setFeedback({message:"Task added successfully!", type: "success"});
    setTimeout(() => setFeedback({message: "", type: ""}), 2000);
  };

  const handleRemoveTodo = (id) => {
    const todoExists = todos.some((todo) => todo.id === id);
    if (!todoExists) {
      setFeedback({message:"Task not found!", type: "error"});
      return;
    }
    setTodos(todos.filter((todo) => todo.id !== id));
    setFeedback({message:"Task removed successfully!", type: "success"});
    setTimeout(() => setFeedback({message: "", type: ""}), 2000);    
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingId(id);
    setEditInput(todoToEdit.text);
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    if (editInput.trim() === "") {
      setFeedback({ message: "Please enter a task to update.", type: "error" });
      return; 
    }
    setTodos(todos.map((todo) => 
      todo.id === editingId ? {...todo, text: editInput} : todo
    ));
    setEditingId(null);
    setEditInput("");
    setFeedback({ message: "Task updated successfully!", type: "success" });
    setTimeout(() => setFeedback({ message: "", type: "" }), 2000);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditInput("");
    setFeedback({message: "", type: ""});
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const handleClearTodos = () => {
    setTodos([]);
    setFeedback({ message: "All ToDos cleared successfully!", type: "success" }); 
    setTimeout(() => setFeedback({ message: "", type: "" }), 2000);
  };

  const value = {
    todos,
    feedback,
    editingId,
    editInput,
    todoInput,
    setTodoInput,
    setEditInput,
    handleAddTodo,
    handleRemoveTodo,
    handleEditTodo,
    handleUpdateTodo,
    handleCancelEdit,
    handleToggleComplete,
    handleClearTodos
  };

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}