import React from 'react';
import TodoApp from '@/components/TodoApp';

const Page: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <TodoApp />
    </div>
  );
}

export default Page;
