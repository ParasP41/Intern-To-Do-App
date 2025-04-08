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
    currentUser: null,
    todo: [ 
        {
            id: 1,
            title: "",
            description: "",
            taskpriority: "",
        }
    ],
    userlogin: (user) => { },
    addTodo: (id, title, description, taskpriority) => { },
    removeTodo: (id) => { },
    updateTodo: (id, title, description, taskpriority) => { },
    auth: (email, pass) => { },
    checkuser: (email) => { },
})

export default function usetodo() {
    return useContext(todo);
}

export const Todoprovider = todo.Provider;
