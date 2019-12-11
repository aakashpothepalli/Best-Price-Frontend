import {useRoutes} from 'hookrouter';
import React from "react"
import Home from "./Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Logsign from "./components/logsign"
import {LoginInfoProvider} from "./state managers/loginContext"
import Cart from "./Cart"
function App() {
  const routeResult = useRoutes({
    "/": () => <LoginInfoProvider><Home /></LoginInfoProvider>,
  "/login": () => <LoginInfoProvider><Login /></LoginInfoProvider>,
  "/signup": () => <LoginInfoProvider><Signup /></LoginInfoProvider>,
  "/cart":()=><LoginInfoProvider><Cart/></LoginInfoProvider>
 })
  return routeResult
}

export default App