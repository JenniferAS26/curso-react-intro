import React, { useState } from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar agua', completed: true },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Hacer el desayuno', completed: true },
//   { text: 'Usar estados derivados', completed: true },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodo = todos.filter(todo => !!todo.completed).length; 
  // Con esta sintaxis -> !!todo.completed <- garantizamos que nos devuelve un true o un false no un elemento
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // para marcar y desmarcar todos
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI
    completedTodo={completedTodo}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  )
}

export default App;
