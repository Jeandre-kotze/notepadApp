import {createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
//import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import { lazy } from "react";

const App = lazy(() => import("./components/App")) //Lazy loading, App doesnt need to be loaded so early

const router = createBrowserRouter([
  { path: '/', 
    element: <HomePage />, 
    errorElement: <ErrorPage />,
  },
  { 
    path: '/login', 
    element: <Login />,
    errorElement: <ErrorPage />,
  }, //Realitve path 
  { 
    path: '/register', 
    element: <Register />,
    errorElement: <ErrorPage />,
  },//"Relative path"
  { 
    path: '/notepad', 
    element: <App />,
    errorElement: <ErrorPage />,
  }, 
])

export default function RoutingPath() {
  return (
    <RouterProvider router={router}/>
  )
}
