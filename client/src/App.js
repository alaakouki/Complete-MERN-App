import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import all components
import PageNotFound from "./components/PageNotFound";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Username from "./components/Username";

// import logo from './logo.svg';
// import './App.css';

// root routes
const router = createBrowserRouter ([
  {
    path: "/",
    element: <Username/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/password",
    element: <Password/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/recovery",
    element: <Recovery/>
  },
  {
    path: "/reset",
    element: <Reset/>
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>
  }
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
