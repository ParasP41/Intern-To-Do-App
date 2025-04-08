
# 📝 React Auth Todo App

A sleek and functional **todo list application** built with **React** that supports **user authentication**, todo management, and persistent localStorage integration. Each user's todos are saved separately under their email.

## 🚀 Features

- 🔐 **Authentication**
  - Sign Up / Log In with email and password
  - Auto-login after successful registration
  - Route protection using React Router

- ✅ **Todo Management**
  - Add, edit, delete, and download todos
  - Todos saved in localStorage under the logged-in user's email
  - Modal-based interface for editing, deleting, and downloading

- 🌐 **Routing**
  - `/signup` - Register a new account
  - `/login` - Access your account
  - `/tasklist` - Manage your todos

- 🌙 **UI & UX**
  - Clean and responsive UI using **Tailwind CSS**
  - Modal dialogs for actions
  - Icon-based interactions

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── SignUp.jsx
│   ├── Login.jsx
│   ├── TaskList.jsx
│   ├── Navbar.jsx
│   ├── TaskInput.jsx
│   ├── TaskList.jsx
│   ├── TaskPage.jsx
│
├── context/
│   └── AppContext.jsx  // Handles auth and todo logic globally
│
├── App.jsx
├── index.js
└── routes/
    └── PrivateRoute.jsx  // Protects /tasklist route
```

## 🧠 Tech Stack

- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **Context API**
- **LocalStorage**

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/react-auth-todo-app.git
cd react-auth-todo-app
npm install
npm start
```

## 🧪 Usage

1. Sign up with your email and password.
2. You’ll be auto-logged in and redirected to your Task List.
3. Start managing your todos!
4. All todos are stored based on your email (e.g., `todos-your@email.com`).

## ✍️ Author

Made with ❤️ by **Paras Vishwakarma**


