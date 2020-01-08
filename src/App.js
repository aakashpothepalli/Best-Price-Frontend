import {useRoutes} from 'hookrouter';
import React from "react"
import Home from "./Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Cart from "./Cart"
function App() {
  const routeResult = useRoutes({
    "/": () => <Home />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
  "/cart":()=><Cart/>
 })
  return routeResult
}

export default App