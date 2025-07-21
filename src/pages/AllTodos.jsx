import React from 'react';
import TodoList from '../components/TodoList';
import { useTodos } from '../context/TodosContext';

export default function AllTodos() {
    const {todos, handleToggleComplete, handleEditTodo, handleRemoveTodo} = useTodos();
    return (
        <TodoList
            todos={todos}
            handleToggleComplete={handleToggleComplete}
            handleEditiTodo={handleEditTodo}
            handleRemoveTodo={handleRemoveTodo}
        />
    );
}