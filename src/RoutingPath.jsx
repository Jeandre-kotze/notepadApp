import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import Login from "./components/Login";
import Register from "./components/register";
import App from "./components/App";


export default function RoutingPath() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/notepad' element={<App />}></Route>
      </Routes>
  </BrowserRouter>)
}
