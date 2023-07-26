import React from 'react';
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
	const onSearchValueChange = e => {
		setSearchValue(e.target.value);
	}

	return (
		<div className="input-container">
			<input 
				className="TodoSearch"
				placeholder="Busquemos una tarea"
				value={searchValue}
				onChange={onSearchValueChange}
				disabled={loading}
			/>
		</div>
	);
}

export { TodoSearch };
