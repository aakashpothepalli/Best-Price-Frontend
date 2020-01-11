import React from 'react';
import {useCookies} from "react-cookie"
import {useEffect} from 'react';
import {useState} from 'react';
import soc from "../socketIO"
import {useHistory,Link} from "react-router-dom"
function App(props) {
    const history = useHistory()
    const [cookies, setCookie] = useCookies();
    const [userName, setUserName] = useState('')
    const [cartCount,setCartCount] =useState(0)
    const signout = () => {
        setCookie('id', null, {path: '/'})
        setCookie('username', null, {path: '/'})

        history.push('/')
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

                <Link to="/" className="navbar-brand ">ECommerce</Link>

                <ul className="navbar-nav ml-auto">

                    <li className="nav-item mt-2">
                        Hello {userName}
                    </li>

                    <li className="nav-item active">
                        <Link class="nav-link" to="/cart">Cart</Link>
                    </li>

                    <li style={{marginLeft:-10,}}>
                        <Link class="nav-link" to="/cart">{cartCount}</Link>
                    </li>

                    <li className="nav-item active">
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
