import React, {useState, useEffect} from "react"
import Home from "./Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Cart from "./Cart"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {toast} from 'react-toastify';
import CartContext, {getCartData} from "./state managers/CartContext"
import {useCookies} from "react-cookie"
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function App() {
    const cookies = useCookies()[0]
    const [cartData, setCartData] = useState([])
    useEffect(() => {if(cookies.id!=='null' &&cookies.id)getCartData(cookies.id).then(res => setCartData(res))}, [])
    return (
        <Router>
            <CartContext.Provider value={[cartData, setCartData]}>
                <Switch>
                    <Route exact="exact" path='/' component={Home}/>
                    <Route exact="exact" path='/login' component={Login}/>
                    <Route exact="exact" path='/signup' component={Signup}/>
                    <Route exact="exact" path='/cart' component={Cart}/>

                </Switch>
            </CartContext.Provider>
        </Router>
    )
}

export default App