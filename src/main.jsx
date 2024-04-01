import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RecipesFeed from './components/RecipiesFeed/index.jsx'
import Profile from './components/Profile/index.jsx'

const router =  createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <RecipesFeed/>},
      {path: "/myProfile", element: <Profile/>} // criar
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
