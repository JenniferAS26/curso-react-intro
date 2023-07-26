import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completedTodo, totalTodos }) {
    
    return (
        totalTodos === completedTodo ?
        <h1 className='TodoCounter'>
            No tienes tareas pendientes
        </h1>
        :
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodo}</span> de <span>{totalTodos}</span> tareas
        </h1>
    );
}

export { TodoCounter };
