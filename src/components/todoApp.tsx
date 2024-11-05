'use client';

import React, { useEffect, useState } from 'react';
import { getAllTodos } from '../utils//supabaseFunctions'
import TodoList from './todoList';

interface Todo {
  id: number;
  title: string;
}

const TodoApp: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos || []);
    };
    getTodos();
  }, []);

  return (
    <section className='text-center mb-2 text-2xl font-medium'>
      <h3 className=''>Supabese Todo App</h3>
      <form>
        <input type="text" className='shadow-lg p-1 outline-none'/>
        <button className='shadow-md border-2 px-1 py-1 rounded-lg bg-green-200'>Add</button>
      </form>
      <TodoList/>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className='p-2 border-b'>
            {todo.title} {/* Todoのタイトルを表示 */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TodoApp;