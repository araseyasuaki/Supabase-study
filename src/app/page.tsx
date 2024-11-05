import React from 'react';
import TodoApp from '@/components/todoApp';

const Page: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <TodoApp/>
    </div>
  );
}

export default Page;
