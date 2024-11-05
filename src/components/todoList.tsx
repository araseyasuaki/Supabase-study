import React from 'react'

const TodoList = () => {
  return (
    <div>
      <ul className='mx-auto'>
        <div className='flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between'>
          <li className='fons-medium'>✅読書</li>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between'>
          <li className='fons-medium'>✅散歩</li>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between'>
          <li className='fons-medium'>✅筋トレ</li>
          <span className='cursor-pointer'>X</span>
        </div>
      </ul>
    </div>
  )
}

export default TodoList