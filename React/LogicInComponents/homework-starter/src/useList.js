import { useState } from 'react';

export function useList() {
  const [list, setList] = useState([]);

  const createItem = () => {
    const newItem = { id: Date.now(), title: '', done: false };
    setList([...list, newItem]);
  };

  const setItemTitle = (id, title) => {
    setList((list) => 
        list.map((item) => (item.id === id ? { ...item, title } : item)));
  };

  const toggleItem = (id) => {
    setList((list) =>
    list.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  };

  const deleteItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem
  };
}

