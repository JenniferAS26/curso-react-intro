import React from 'react';
import './EmptyTodos.css'
import image from '../assets/rabbit.png'

function EmptyTodos() {
    
    return (
        <div className="input-container">
            <div className='image-container'>
                <img src={image} />
                <p>Nueva tarea</p>
            </div>
        </div>
    );
}

export { EmptyTodos };
