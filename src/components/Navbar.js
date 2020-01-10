import React from 'react';
import {useCookies} from "react-cookie"
import {useEffect} from 'react';
import {useState} from 'react';
import soc from "../socketIO"

function App(props) {
    const [cookies, setCookie] = useCookies();
    const [userName, setUserName] = useState('')
    const [cartCount,setCartCount] =useState(0)
    const signout = () => {
        setCookie('id', null, {path: '/'})
        setCookie('username', null, {path: '/'})

        window.open('/', '_self')
    }

    useEffect(() => {
        setUserName(cookies.username)
    }, [cookies.username])

    useEffect(()=>{
      if(cookies.id && cookies.id!=='null'){
        console.log('asas')
      soc.emit('cartcount',cookies.id)

      soc.on('cartcount',res=>{
        setCartCount(res)
      })
    }

    },[])

    if (cookies.id && cookies.id !== 'null') {
        return (
            <div className="navbar navbar-expand bg-light w-100">

                <a href="/" className="navbar-brand ">ECommerce</a>

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item mt-2">
                        Hello {userName}
                    </li>

                    <li className="nav-item active">
                        <a class="nav-link" href="/cart">Cart</a>
                    </li>

                    <li style={{marginLeft:-10,}}>
                        <a class="nav-link" href="/cart">{cartCount}</a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href='/' onClick={signout}>Sign Out</a>
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
                        <a class="nav-link" href="/login">Login
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a class="nav-link" href="/signup">Signup</a>
                    </li>

                </ul>

            </div>
        );
    }
}

export default App;
