import React, { createContext, useContext } from "react";

export const todo = createContext({
    user: [
        {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        }
    ],
    todo:[ 
        {
            id: 1,
            title: "",
            description: "",
            taskpriority: "",
        }],
    userlogin: (user) => { },
    addTodo: (id,todo) => { },
    removeTodo: (id) => { },
    updateTodo: (id,todo) => { },
    auth:(email,pass)=>{},
})

export default function usetodo() {
    return useContext(todo)
}

export const Todoprovider = todo.Provider;