import React from "react"
import Home from "./Home"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"


const routes = {
    "/": () => <Home />,
    "/login": () => <Login />,
    "/signup": () => <Signup />
  };
  export default routes;