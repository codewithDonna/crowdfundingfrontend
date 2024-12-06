import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import NavBar from "./components/NavBar.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
// Create router and tell it what pages to render at what path
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [ { path: "/Contact", element: <ContactPage /> },
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/project",
        element: <ProjectPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap our app in the router provider so the pages render */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
