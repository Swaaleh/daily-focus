import React from 'react';
import TodoList from '../components/TodoList';
import { useTodos } from '../context/TodoContext';

export default function AllTodos() {
    const {todos, handleToggleComplete, handleEditiTodo, handleRemoveTodo} = useTodos();
    return (
        <TodoList
            todos={todos}
            handleToggleComplete={handleToggleComplete}
            handleEditiTodo={handleEditiTodo}
            handleRemoveTodo={handleRemoveTodo}
        />
    );
}