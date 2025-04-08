// TaskPage.js
import React from 'react';
import Navbar from './Navbar';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import usetodo from '../TodoContext/TodoContext';

export default function TaskPage() {
  const { todo } = usetodo();

  return (
    <>
      <Navbar />
      <TaskInput />
      <div className='grid my:p-10 md:px-4 p-3 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 place-item-center gap-4'>
        {todo.map((todo) => (
          <TaskList key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}
