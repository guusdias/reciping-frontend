import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Profile from "./pages/Profile";
import BasePage from "./pages/BasePage";
import Feed from "./pages/Feed";
import AddRecipe from "./pages/AddRecipe";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import MyRecipesFeed from "./pages/MyRecipes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<BasePage />} />,
    errorElement: <NotFound />,
    children: [
      { path: "feed", element: <Feed /> },
      { path: "recipes", element: <MyRecipesFeed /> },
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
