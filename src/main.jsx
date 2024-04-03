import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile/index.jsx";
import BasePage from "./pages/BasePage/index.jsx";
import Feed from "./pages/Feed/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasePage />,
    children: [
      { path: "/feed", exact: true, element: <Feed /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
