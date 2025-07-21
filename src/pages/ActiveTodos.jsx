import React from 'react';
import TodoList from '../components/TodoList';
import { useTodos } from '../context/TodosContext';

export default function ActiveTodos() {
  const { todos, handleToggleComplete, handleEditTodo, handleRemoveTodo } = useTodos();
  const activeTodos = todos.filter(todo => !todo.completed);
  
  return (
    <TodoList 
      todos={activeTodos}
      handleToggleComplete={handleToggleComplete}
      handleEditTodo={handleEditTodo}
      handleRemoveTodo={handleRemoveTodo}
    />
  );
}