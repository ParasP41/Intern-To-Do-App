import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import usetodo from '../TodoContext/TodoContext'
import { useNavigate } from 'react-router-dom'
function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { auth } = usetodo();

    // const handlerLogin = (e) => {
    //     e.preventDefault();
    //     auth(email, password);
    //     setEmail("")
    //     setPassword("")
    // }

    const navigate = useNavigate();

    const handlerLogin = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            alert("Please enter both email and password.");
            return
          }
        const isValid = auth(email, password);
        if (isValid) {
            navigate('/tasklist');
        }
    };


    return (
        <div className='flex  my-40 item-center justify-center '>
            <form className='bg-gray-300 w-120 p-10 rounded-2xl'>
                <div className='flex justify-between items-end'>
                    <div className='text-4xl font-light md:my-4'>Log In</div>
                    <Link to='/signup' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</Link>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); }}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john.doe@company.com"
                        required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        required />
                </div>
                <button onClick={handlerLogin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
            </form>

        </div>
    )
}

export default SignUp
