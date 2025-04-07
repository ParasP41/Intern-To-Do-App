import React, { useEffect, useState } from 'react'
import { initFlowbite } from 'flowbite'
import Navbar from './Components/Navbar'
import { Todoprovider } from './TodoContext/TodoContext'
import LoginIn from './Components/LoginIn'
import TaskList from './Components/TaskList'
import TaskInput from './Components/TaskInput'
import SignUp from './Components/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const [user, setUser] = useState([]);
  const [todo, setTodo] = useState([]);
  const [initialized, setInitialized] = useState(false);
  
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><SignUp /></>,
    },
    {
      path: '/signup',
      element: <><LoginIn /></>,
    },
    {
      path: '/login',
      element: <><SignUp /></>,
    },
    {
      path: '/tasklist',
      element: <> <Navbar />
        <TaskInput /></>,
    }
  ])



  //Local storage Setup
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || [];
    const storedTodo = JSON.parse(localStorage.getItem('todo')) || [];
    setUser(storedUser);
    setTodo(storedTodo);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('todo', JSON.stringify(todo));
    }
  }, [user, todo, initialized]);

  //to sign up the user
  const userlogin = (fname, lname, email, password) => {
    const userData = {
      firstname: fname,
      lastname: lname,
      email: email,
      password: password,
    };
    setUser((prevUser) => [...prevUser, userData]);
  };

  //to log in the user
  const auth = (email, password) => {
    const foundUser = user.find(item => item.email === email && item.password === password);

    if (foundUser) {
      alert("User logged in Successfully");
      return true
    } else {
      alert("Invalid user : please Sign Up");
      return false
    }
  };

  //to add the bew todo
  const addTodo = (id, title, description, taskpriority) => {
    const todoData = {
      id: id,
      title: title,
      description: description,
      taskpriority: taskpriority
    };
    setTodo((prevTodos) => [...prevTodos, todoData]);
  };

  //delete the todo
  const removeTodo = (id) => {
    setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  //for update the todo
  const updateTodo = (id, title, description, taskpriority) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, title, description, taskpriority }
          : todo
      )
    );
  };

  //flowbite
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <Todoprovider value={{
      user,
      todo,
      userlogin,
      addTodo,
      removeTodo,
      updateTodo,
      auth,
    }}>
      <RouterProvider router={router} />
      {window.location.pathname === "/tasklist" && <div className='grid my:p-10 md:px-4 p-3 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 place-item-center gap-4'>
        {todo.map((todo) => (
          <TaskList
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>}
    </Todoprovider>
  );
}
