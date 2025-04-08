import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usetodo from '../TodoContext/TodoContext';

function SignUp() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // context
  const { auth } = usetodo();

  // navigate after login
  const navigate = useNavigate();

  // login submission
  const handlerLogin = (e) => {
    e.preventDefault();

    // Check for empty inputs
    if (!email.trim() || !password.trim()) {
      alert('Please enter both email and password.');
      return;
    }

    // Call context
    const isValid = auth(email, password);

    // If login successful, redirect to tasklist
    if (isValid) {
      navigate('/tasklist');
    }

    
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex my-33 item-center justify-center">
      <form className="bg-gray-300 w-120 p-10 m-5 rounded-2xl">
       
        <div className="flex justify-between items-center my-5 md:my-2 ">
          <div className=" md:text-4xl text-3xl font-light md:py-4 ">Log In</div>
          <Link
            to="/signup"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
          >
            Sign Up
          </Link>
        </div>

       
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
          />
        </div>

      
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>

        
        <button
          onClick={handlerLogin}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default SignUp;
