import React from 'react';
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <div className="input-container">
            <input 
                className="TodoSearch"
                placeholder="Busquemos una tarea"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
                />
        </div>
    );
}

export { TodoSearch };
