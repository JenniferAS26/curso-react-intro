import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { text } from "@fortawesome/fontawesome-svg-core";
const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false);
    
      const completedTodo = todos.filter(todo => !!todo.completed).length; 
      // Con esta sintaxis -> !!todo.completed <- garantizamos que nos devuelve un true o un false no un elemento
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
      });

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos);
      }
    
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
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodo,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }