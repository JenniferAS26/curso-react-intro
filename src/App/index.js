import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { Modal } from "../Modal";
import { TodoHeader } from "../TodoHeader";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    completedTodo,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    setOpenModal
  } = useTodos();
  
  return (
    <> {/** React.Fragment */}
      <TodoHeader>
        <TodoCounter 
          completedTodo={completedTodo}
          totalTodos={totalTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList>
        {loading && 
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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
      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      {openModal && (
          <Modal>
            <TodoForm
              addTodo={addTodo  }
              setOpenModal={setOpenModal}
            />
          </Modal>
      )}
    </>
  );
}

export default App;
