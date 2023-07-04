import { useState } from "react";

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

export { useLocalStorage };