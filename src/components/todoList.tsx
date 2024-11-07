import React from 'react'


type Props = {
  todos: {
    id: number;
    title: string;
  }[];
}

const TodoList = (props: Props) => {

  const { todos } = props;

  return (
    <div>
      <ul className='mx-auto'>
        {todos.map((todo) => (
          <div key={todo.id} className='flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between'>
            <li className='fons-medium'>{todo.title}</li>
            <span className='cursor-pointer'>X</span>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList