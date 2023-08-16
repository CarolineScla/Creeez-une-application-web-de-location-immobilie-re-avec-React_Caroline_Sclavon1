import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../components/Navbar.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


// eslint-disable-next-line react-refresh/only-export-components
const HeaderFooterLayout = () => {
  return (
    <>
      <MainWrapper>
        <Navbar />
        <Outlet />
      </MainWrapper>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/appartement/:id",
        element: <CurrentAppartement />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
