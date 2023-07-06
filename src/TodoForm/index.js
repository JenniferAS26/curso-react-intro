import React, { useContext, useState } from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('')

    const onSubmit = e => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = e => {
        setNewTodoValue(e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className="TodoForm-container">
            <label htmlFor="id-textarea" className="label-field">Escribe tu nueva tarea</label>
            <textarea 
                className="textarea-field" 
                placeholder="Añadir una nueva tarea" 
                id="id-textarea"
                value={newTodoValue}
                onChange={onChange}    
            />
            <button
            type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
            >Cancelar</button>
            <button
            type="submit"
                className="TodoForm-button TodoForm-button--add"
            >Añadir</button>
        </form>
    );
}

export { TodoForm }