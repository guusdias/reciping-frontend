import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './components/Profile/index.jsx'
import BasePage from './pages/BasePage/index.jsx'

const router =  createBrowserRouter([
  {
    path: "/",
    element: <BasePage/>,
    children: [
      {path: "/", exact: true, element: <BasePage/>},
      {path: "/myProfile", element: <Profile/>} // criar
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
