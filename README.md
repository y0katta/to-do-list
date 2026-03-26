# To-Do List App

A modern and convenient task management application (To-Do List) built with React. It helps you organize your tasks, saves them in your browser, and allows quick navigation through the list.

---

### Demo 
<a href="https://y0katta.github.io/to-do-list/" target="_blank">
  <img src="https://img.shields.io/badge/-To--Do%20List-2D2D2D?style=flat-square&logo=github&logoColor=white" alt="To-Do List">
</a>

---

# Features

◉ Add tasks — create new tasks with titles.

◉ Manage status — mark tasks as completed or active.

◉ Delete — remove a single task or clear the entire list.

◉ Navigation — click on task titles to navigate to them.

◉ Search — quickly filter tasks by title.

◉ Scroll — automatically scroll to the first incomplete task.

◉ Data persistence — all tasks are saved in localStorage and persist after page reload.

---

# Tech Stack

![CSS3](https://img.shields.io/badge/-CSS3-2D2D2D?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-2D2D2D?style=flat-square&logo=javascript&logoColor=white)
![React](https://img.shields.io/badge/-React-2D2D2D?style=flat-square&logo=react&logoColor=white)
![SASS](https://img.shields.io/badge/-SASS-2D2D2D?style=flat-square&logo=sass&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-2D2D2D?style=flat-square&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/-SCSS-2D2D2D?style=flat-square&logo=sass&logoColor=white)
![JSX](https://img.shields.io/badge/-JSX-2D2D2D?style=flat-square&logo=react&logoColor=white)
![Fetch API](https://img.shields.io/badge/-Fetch%20API-2D2D2D?style=flat-square&logoColor=white)
![DOM API](https://img.shields.io/badge/-DOM%20API-2D2D2D?style=flat-square&logoColor=white)
![React DevTools](https://img.shields.io/badge/-React%20DevTools-2D2D2D?style=flat-square&logo=react&logoColor=white)

---

# How to use

1. **Add a task**: Enter text in the input field and click the "Add" button.

2. **Search**: Enter text in the search field — the task list filters instantly.

2. **Navigate via title**: Click on a task title to jump to that task.

2. **Scroll to important**: Use the special button to automatically scroll to the first incomplete task.

2. **Manage tasks**: Use checkboxes to mark completion and the cross icon to delete.

---

# Implementation Details

◉ *localStorage integration*
On app mount, data is loaded from storage; any change to the list (add, delete, status toggle) is automatically synced with localStorage.

◉ *Navigation*
Implemented using the DOM API (id/ref) for smooth scrolling to the corresponding task.

◉ *Optimization*
Uses useState and useEffect hooks to manage component lifecycle.


---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
