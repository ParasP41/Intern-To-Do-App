import React, { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite'; 
import { Todoprovider } from './TodoContext/TodoContext'; 
import SignUp from './Components/SignUp'; 
import LoginIn from './Components/LoginIn'; 
import TaskPage from './Components/TaskPage'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  // App-wide states
  const [user, setUser] = useState([]);
  const [todo, setTodo] = useState([]); 
  const [initialized, setInitialized] = useState(false); 
  const [currentUser, setCurrentUser] = useState(null); 

  // Routes setup
  const router = createBrowserRouter([
    { path: '/', element: <SignUp /> },          
    { path: '/signup', element: <LoginIn /> },   
    { path: '/login', element: <SignUp /> },    
    { path: '/tasklist', element: <TaskPage /> } 
  ]);

  // Load users and todos from localStorage once when app starts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || [];
    const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

    setUser(storedUser);
    setCurrentUser(storedCurrentUser);

    // Load current user's todos from localStorage
    if (storedCurrentUser) {
      const storedTodo = JSON.parse(localStorage.getItem(`todos-${storedCurrentUser}`)) || [];
      setTodo(storedTodo);
    }

    setInitialized(true);
  }, []);

  // Save users and todos to localStorage when they change
  useEffect(() => {
    if (initialized) {
      localStorage.setItem('user', JSON.stringify(user));
      if (currentUser) {
        localStorage.setItem(`todos-${currentUser}`, JSON.stringify(todo));
      }
    }
  }, [user, todo, initialized, currentUser]);

  // Handle Sign up registration
  const userlogin = (fname, lname, email, password) => {
    const alreadyExists = user.some((u) => u.email === email);
    if (alreadyExists) {
      alert('User already exists');
      return false;
    }

    // Add new user
    const newUser = { firstname: fname, lastname: lname, email, password };
    const updatedUsers = [...user, newUser];
    setUser(updatedUsers);
    setCurrentUser(email);
    localStorage.setItem('user', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(email));

    // Clear their todos for a fresh start
    setTodo([]);
    localStorage.setItem(`todos-${email}`, JSON.stringify([]));
    return true;
  };

  // Check if email is unique (used during signup)
  const checkuser = (email) => {
    return !user.some((u) => u.email === email);
  };

  //check for the log in
  const auth = (email, password) => {
    const found = user.find((u) => u.email === email && u.password === password);
    if (found) {
      setCurrentUser(email);
      localStorage.setItem('currentUser', JSON.stringify(email));

      // Load user's todos
      const todos = JSON.parse(localStorage.getItem(`todos-${email}`)) || [];
      setTodo(todos);
      return true;
    } else {
      alert('Invalid credentials');
      return false;
    }
  };

  // Add a new todo
  const addTodo = (id, title, description, taskpriority) => {
    const newTodo = { id, title, description, taskpriority };
    const updated = [...todo, newTodo];
    setTodo(updated);

    // Saving current user to localStorage
    if (currentUser) {
      localStorage.setItem(`todos-${currentUser}`, JSON.stringify(updated));
    }
  };

  // Delete todo
  const removeTodo = (id) => {
    const updated = todo.filter((t) => t.id !== id);
    setTodo(updated);
    if (currentUser) {
      localStorage.setItem(`todos-${currentUser}`, JSON.stringify(updated));
    }
  };

  // Update the todo
  const updateTodo = (id, title, description, taskpriority) => {
    const updated = todo.map((t) =>
      t.id === id ? { ...t, title, description, taskpriority } : t
    );
    setTodo(updated);
    if (currentUser) {
      localStorage.setItem(`todos-${currentUser}`, JSON.stringify(updated));
    }
  };

  // Logout user
  const logout = () => {
    setCurrentUser(null);
    setTodo([]);
    localStorage.removeItem('currentUser');
  };

  // Initialize Flowbite 
  useEffect(() => {
    initFlowbite();
  }, []);

  // Wrap app with context provider and router
  return (
    <Todoprovider
      value={{
        user,
        todo,
        currentUser,
        userlogin,
        addTodo,
        removeTodo,
        updateTodo,
        auth,
        checkuser,
        logout,
      }}
    >
      <RouterProvider router={router} />
    </Todoprovider>
  );
}
