import React from 'react';
import TodoApp from '@/components/todoApp';
// テス

const Page: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <TodoApp/>
      テスト
    </div>
  );
}

export default Page;
