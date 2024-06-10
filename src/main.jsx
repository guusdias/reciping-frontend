import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/AuthContext"; // Import AuthContext

import Profile from "./pages/Profile/index.jsx";
import BasePage from "./pages/BasePage/index.jsx";
import Feed from "./pages/Feed/index.jsx";
import AddRecipe from "./components/AddRecipe/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";
import Favorites from "./pages/Favorites/index.jsx";
import MyRecipes from "./pages/MyRecipes/index.jsx";
import Login from "./pages/Login/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthContext.Consumer>
        {({ isAuthenticated }) =>
          isAuthenticated ? (
            <BasePage>
              <Route path="/feed" element={<Feed />} />
              <Route path="/recipes" element={<MyRecipes />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/addRecipe" element={<AddRecipe />} />
              <Route path="/favorites" element={<Favorites />} />
            </BasePage>
          ) : (
            <Login />
          )
        }
      </AuthContext.Consumer>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
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
