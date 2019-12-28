import React,{useContext} from 'react';
import {LoginContext} from "../state managers/loginContext"
import {useCookies} from "react-cookie"
import { useEffect } from 'react';
import Axios from 'axios'
import { useState } from 'react';
function App(props) {
  const [cookies, setCookie] = useCookies();
  const [userName,setUserName] = useState('')
  const signout =()=>{
    setCookie('id',null,{path:'/'})
    setCookie('username',null,{path:'/'})

    window.open('/','_self')
  }

  useEffect(()=>{
    setUserName(cookies.username)
  })

  if(cookies.id && cookies.id !== 'null'){
    return(
    <div className="navbar navbar-expand bg-light w-100" >
       
      <a href="/" className ="navbar-brand ">ECommerce</a>
  
        <ul className="navbar-nav ml-auto">

        <li className="nav-item active">   
              <a class="nav-link" href="/cart">Hello {userName}</a>
          </li>

          <li className="nav-item active">   
              <a class="nav-link" href="/cart">Cart</a>
          </li>
         <li className="nav-item active">   
              <a className="nav-link" href ='/' onClick={signout}>Sign Out</a>
          </li>
        </ul>
        
      </div>
    )
  }
  else{
    return (
      <div className="navbar navbar-expand bg-light w-100" >
       
      <a href="/" className ="navbar-brand ">ECommerce</a>
  
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">   
              <a class="nav-link" href="/login">Login </a>
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
