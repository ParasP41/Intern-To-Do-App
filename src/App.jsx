import React, { useEffect, useState } from 'react'
import { initFlowbite } from 'flowbite'
import Navbar from './Components/Navbar'
import { Todoprovider } from './TodoContext/TodoContext'
import LoginIn from './Components/LoginIn'
import TaskList from './Components/TaskList'
import TaskInput from './Components/TaskInput'

export default function App() {
  const [user, setUser] = useState([]);
  const [todo, setTodo] = useState([]);


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedTodo = JSON.parse(localStorage.getItem('todo'));
    setUser(storedUser);
    setTodo(storedTodo);
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [user, todo]);


  const userlogin = (fname, lname, email, password) => {
    const userData = {
      firstname: fname,
      lastname: lname,
      email: email,
      password: password,
    };
    setUser((prevUser) => [...prevUser, userData]);
  };

  const addTodo = (id, title, description, taskpriority) => {
    const todoData = {
      id: id,
      title: title,
      description: description,
      taskpriority: taskpriority
    };
    setTodo((prevTodos) => [...prevTodos, todoData]);
  };

  const removeTodo = (id) => {
    setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, title, description, taskpriority) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, title, description, taskpriority }
          : todo
      )
    );
  };

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <Todoprovider value={{ user, userlogin, addTodo, todo, removeTodo, updateTodo }}>
      <Navbar />
      <TaskInput />
      <div className='grid my:p-10 md:px-4 p-3 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 place-item-center gap-4'>
        {todo.map((todo) => (
          <TaskList
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
      <LoginIn />
    </Todoprovider>
  );
}
