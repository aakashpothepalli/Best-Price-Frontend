import {useRoutes} from 'hookrouter';
import React from "react"
import Home from "./Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Logsign from "./components/logsign"
function App() {
  const routeResult = useRoutes({
    "/": () => <Home />,
  "/login": () => <Logsign />,
  "/signup": () => <Signup />})
  return routeResult
}

export default App