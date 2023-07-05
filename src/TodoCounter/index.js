import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const  { 
        completedTodo,
        totalTodos
    } = React.useContext(TodoContext);
    return (
        totalTodos === completedTodo ?
        <h1 className='TodoCounter'>
            Felicidades has completado todos tus TODOS
        </h1>
        :
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodo}</span> de <span>{totalTodos}</span> TODOS
        </h1>
    );
}

export { TodoCounter };
