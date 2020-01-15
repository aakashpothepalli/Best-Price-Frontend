import React,{useContext} from 'react';
import {useCookies} from "react-cookie"
import {useEffect} from 'react';
import {useState} from 'react';
import Axios from "axios"
import CartContext from "../state managers/CartContext"
import {useHistory, Link} from "react-router-dom"
import { apiurl } from '../apiurl';
function App(props) {
    const history = useHistory()
    const [cookies, setCookie] = useCookies();
    const [userName, setUserName] = useState('')

    const [cartData,setCartData] = useContext(CartContext)
    
    const signout = () => {
        setCookie('id', null, {path: '/'})
        setCookie('username', null, {path: '/'})

        history.push('/')
    }

    useEffect(() => {
        setUserName(cookies.username)
    }, [cookies.username])



    if (cookies.id && cookies.id !== 'null') {
        return (
            <div className="navbar sticky-top navbar-expand-md bg-light w-100">

                <Link to="/" className="navbar-brand col-md-6 ">ECommerce</Link>

                <ul
                    className="ml-md-auto  navbar-expand text-md-right  text-lg-right"
                    style={{
                        listStyleType: 'none',
                        display: 'flex'
                    }}>

                    <li
                        className="nav-item"
                        style={{
                            marginTop: 8
                        }}>
                        Hello {userName}
                    </li>

                    <li className="nav-item ">
                        <Link class="nav-link" to="/cart">Cart</Link>
                    </li>

                    <li
                        style={{
                            marginLeft: -25
                        }}>
                        <Link class="nav-link" to="/cart">{cartData.length}</Link>
                    </li>

                    <li className="nav-item ">
                        <Link className="nav-link" to='/' onClick={signout}>Sign Out</Link>
                    </li>
                </ul>

            </div>
        )
    } else {
        return (
            <div className="navbar navbar-expand bg-light w-100">

                <a href="/" className="navbar-brand ">ECommerce</a>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link class="nav-link" to="/login">Login
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link class="nav-link" to="/signup">Signup</Link>
                    </li>

                </ul>

            </div>
        );
    }
}

export default App;
