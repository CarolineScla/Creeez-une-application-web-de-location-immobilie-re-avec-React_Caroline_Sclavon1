import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import AppartementGrid from './components/AppartementGrid.jsx';
import Error from './pages/ErrorPage.jsx';
import "./index.scss"

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );