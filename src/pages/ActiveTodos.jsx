import React from 'react'
import TodoList from '../components/TodoList'
import { useTodos } from '../context/TodoContext';

export default function ActiveTodos() {
    const {todos, handleToggleComplete, handleEdidTodo, handleRemoveTodo} = useTodos();
    const activeTodos = todos.filter(todo => !todo.completed);
    return (
        <TodoList 
            todos={activeTodos} 
            handleToggleComplete={handleToggleComplete} 
            handleEdidTodo={handleEdidTodo} 
            handleRemoveTodo={handleRemoveTodo} 
        />
    )
}