import React,{useContext} from 'react';
import {LoginContext} from "../state managers/loginContext"
import {useCookies} from "react-cookie"

function App(props) {

  const [isLoggedIn,setIsLoggedIn] = useContext(LoginContext)
  const [cookies, setCookie] = useCookies();

  const signout =()=>{
    setCookie('id',null,{path:'/'})
    window.open('/','_self')
  }
  console.log(isLoggedIn.isLoggedIn)
  if(isLoggedIn.isLoggedIn){
    return(
    <div className="navbar navbar-expand bg-light w-100" >
       
      <a href="/" className ="navbar-brand ">ECommerce</a>
  
        <ul className="navbar-nav ml-auto">

          <li className="nav-item active">   
              <a class="nav-link" href="/cart">Cart</a>
          </li>
         <li className="nav-item active">   
              <a class="nav-link" href="/" onClick={signout}>Sign Out</a>
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
