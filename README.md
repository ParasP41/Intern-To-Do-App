
# 📝 React Auth Todo App

A modern and fully responsive **Todo List Application** built with **React**, featuring secure **user authentication**, intuitive UI, and personalized data storage using **localStorage**. Each user's tasks are managed and stored individually for a tailored experience.

---

## 🚀 Features

### 🔐 Authentication
- User Sign Up and Log In with email and password
- Auto-login post-registration
- Protected routes using React Router

### ✅ Todo Management
- Add, edit, delete, and download tasks
- User-specific todo data stored in localStorage
- Modal interface for smooth interaction

### 🌐 Routing
- `/signup` – Register a new account
- `/login` – Access your account
- `/tasklist` – View and manage your todos

### 🌙 UI/UX
- Clean and responsive interface powered by **Tailwind CSS**
- Elegant modals for task actions
- Icon-driven controls for improved accessibility

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── SignUp.jsx
│   ├── Login.jsx
│   ├── Navbar.jsx
│   ├── TaskInput.jsx
│   ├── TaskList.jsx
│   ├── TaskPage.jsx
│
├── context/
│   └── AppContext.jsx        # Manages authentication and todo state
│
├── routes/
│   └── PrivateRoute.jsx      # Route protection logic
│
├── App.jsx
└── index.js
```

---

## 🧠 Tech Stack

- ⚛️ **React.js**
- 🧭 **React Router DOM**
- 🎨 **Tailwind CSS**
- 🌐 **Flowbite UI**
- 🌟 **React Icons**
- 🧰 **Context API**
- 💾 **LocalStorage**

---

## 🛠️ Getting Started

To run this project locally:

```bash
git clone "https://github.com/ParasP41/To-Do-App.git"
cd To-Do-App
npm install
npm run dev
```

---

## 💡 Usage Guide

1. Sign up using your email and password.
2. Upon registration, you'll be automatically logged in.
3. Navigate to the Task List page to manage your tasks.
4. All tasks are securely stored in `localStorage` under your unique email key.

---

## 👨‍💻 Author

Built with ❤️ by **Paras Vishwakarma**  
[GitHub Profile](https://github.com/ParasP41)

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

