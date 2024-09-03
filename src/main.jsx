import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";

import Profile from "./pages/Profile/index.tsx";
import BasePage from "./pages/BasePage/index.jsx";
import Feed from "./pages/Feed/index.jsx";
import AddRecipe from "./components/AddRecipe/index.tsx";
import NotFound from "./pages/NotFound/index.tsx";
import Favorites from "./pages/Favorites/index.jsx";
import MyRecipes from "./pages/MyRecipes/index.jsx";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index.jsx";

const ProtectedRoute = ({ element }) => {
  return (
    <AuthContext.Consumer>
      {({ isAuthenticated }) => (isAuthenticated ? element : <Login />)}
    </AuthContext.Consumer>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<BasePage />} />,
    errorElement: <NotFound />,
    children: [
      { path: "feed", element: <Feed /> },
      { path: "recipes", element: <MyRecipes /> },
      { path: "profile", element: <Profile /> },
      { path: "addRecipe", element: <AddRecipe /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
