import React, { useState } from "react";

function useLocalStorage(itemName, initialValue) {
    
  const [syncItem, setSyncItem] = useState(true);
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
   
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
        setSyncItem(true);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [syncItem]);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const syncronizeItem = () => {
    setLoading(true);
    setSyncItem(false);
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    syncronizeItem
  };
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar agua', completed: true },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Hacer el desayuno', completed: true },
//   { text: 'Usar estados derivados', completed: true },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));