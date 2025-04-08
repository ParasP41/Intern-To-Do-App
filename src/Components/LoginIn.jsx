import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usetodo from '../TodoContext/TodoContext';

function LoginIn() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Accessing context functions
  const { userlogin, checkuser, auth } = usetodo();

  // Navigation 
  const navigate = useNavigate();

  // form submission
  const handlerSignUp = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email.trim() || !password.trim() || !fName.trim() || !lName.trim()) {
      alert('Please fill all the fields');
      return;
    }

    // Check if email already exists
    const isEmailUnique = checkuser(email);
    if (!isEmailUnique) {
      alert('User already exists with this email.');
      return;
    }

    // Call context method to register user
    const success = userlogin(fName, lName, email, password);
    if (success) {
      navigate('/tasklist'); // Navigate to task page after successful signup
    }

    // Clear input fields
    setFName('');
    setLName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex my-28 item-center justify-center">
      <form className="bg-gray-300 w-120 p-10 m-5 rounded-2xl">
       
        <div className="flex justify-between  items-center my-5 md:my-2 ">
          <div className="text-4xl font-light md:my-4">Sign Up</div>

         
          <Link
            to="/login"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center"
          >
            Log In
          </Link>
        </div>

       
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">First name</label>
            <input
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
            <input
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Doe"
              required
            />
          </div>
        </div>

       
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
          <input
            type="email" // Ensures the input must follow email pattern
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
          onClick={handlerSignUp}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default LoginIn;
