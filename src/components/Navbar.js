import React,{useContext} from 'react';
import {LoginContext} from "../state managers/loginContext"
import {useCookies} from "react-cookie"

function App(props) {

  const [cookies, setCookie] = useCookies();
  const [loginInfo, setLoginInfo] = useContext(LoginContext)

  const signout =()=>{
    setCookie('id',null,{path:'/'})
    window.open('/','_self')
  }

  if(loginInfo.isLoggedIn){
    return(
    <div className="navbar navbar-expand bg-light w-100" >
       
      <a href="/" className ="navbar-brand ">ECommerce</a>
  
        <ul className="navbar-nav ml-auto">

        <li className="nav-item active">   
              <a class="nav-link" href="/cart">Hello {loginInfo.name}</a>
          </li>

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
