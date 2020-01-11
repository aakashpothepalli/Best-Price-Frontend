import React from "react"
import Home from "./Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Cart from "./Cart"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function App() {

  return(
  <Router>
    <Switch>
      <Route exact path= '/' component= {Home}/>
      <Route exact path= '/login' component= {Login}/>
      <Route exact path= '/signup' component= {Signup}/>
      <Route exact path= '/cart' component= {Cart}/>

    </Switch>
  </Router>)
}

export default App