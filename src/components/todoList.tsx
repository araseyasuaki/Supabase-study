import React from 'react';

interface Todo {

}

interface Props {
  todos: {
    id: number;
    title: string;
  }[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      <ul className='mx-auto'>
        {todos.map((todo) => (
          <div key={todo.id} className='flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between'>
            <li className='font-medium'>{todo.title}</li>
            <span className='cursor-pointer'>X</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
