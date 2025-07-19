import React from 'react';
import TodoList from '../components/TodoList';
import { useTodos } from '../context/TodosContext';

export default function CompletedTodos() {
  const { todos, handleToggleComplete, handleEditTodo, handleRemoveTodo } = useTodos();
  const completedTodos = todos.filter(todo => todo.completed);
  
  return (
    <TodoList 
      todos={completedTodos}
      handleToggleComplete={handleToggleComplete}
      handleEditTodo={handleEditTodo}
      handleRemoveTodo={handleRemoveTodo}
    />
  );
}