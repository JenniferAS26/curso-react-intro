import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar agua', completed: true },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Hacer el desayuno', completed: true },
//   { text: 'Usar estados derivados', completed: true },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem; 
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItems] = useState(parsedItem);

  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem);
  };
  return [item, saveItems];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodo = todos.filter(todo => !!todo.completed).length; 
  // Con esta sintaxis -> !!todo.completed <- garantizamos que nos devuelve un true o un false no un elemento
  const totalTodo = todos.length;

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
    <> {/** React.Fragment */}
      <TodoCounter completed={completedTodo} total={totalTodo} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => {
          return( 
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />)
        })}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
