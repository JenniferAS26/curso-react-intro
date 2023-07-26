import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completedTodo, totalTodos, loading }) {
    
    return (
        totalTodos === completedTodo ?
        <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
            No tienes tareas pendientes
        </h1>
        :
        <h1 className="TodoCounter">
            Has completado <span>{completedTodo}</span> de <span>{totalTodos}</span> tareas
        </h1>
    );
}

export { TodoCounter };
