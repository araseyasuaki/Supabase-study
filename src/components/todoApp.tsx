'use client';

import React, { useEffect, useState } from 'react';
import { getAllTodos, addTodo } from '../utils//supabaseFunctions'
import TodoList from './todoList';

interface Todo {
  id: number;
  title: string;
}

const TodoApp: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos ?? []);
    };
    getTodos();
  }, []);


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (title === "") return;

    await addTodo(title);
    let todos = await getAllTodos();
    setTodos(todos ?? []);

    setTitle("");
  };

  return (
    <section className='text-center mb-2 text-2xl font-medium'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" className='shadow-lg p-1 outline-none' onChange={(e) => setTitle(e.target.value)} value={title}/>
        <button className='shadow-md border-2 px-1 py-1 rounded-lg bg-green-200'>Add</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos}/>
    </section>
  );
}

export default TodoApp;