import React from 'react';
import TodoList from '../components/TodoList';
import { useTodos } from '../context/TodosContext';

export default function CompletedTodos() {
  const { todos, handleToggleComplete, handleEditTodo, handleRemoveTodo, handleClearCompleted } = useTodos();
  const completedTodos = todos.filter(todo => todo.completed);
  
  return (
    <>
    <TodoList 
      todos={completedTodos}
      handleToggleComplete={handleToggleComplete}
      handleEditTodo={handleEditTodo}
      handleRemoveTodo={handleRemoveTodo}
    />
    {completedTodos.length > 0 && (
      <button 
        onClick={handleClearCompleted} 
        style={{ 
          padding: '10px 20px',
          backgroundColor: '#dc3545',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px',
        }}>
        Clear Completed Tasks
      </button>
    )}
    </>
  );
}