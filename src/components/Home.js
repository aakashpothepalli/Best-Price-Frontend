import React,{useEffect,useState} from 'react';
import Login from "./Login"
import {useCookies,Cookies} from "react-cookie"
function Home() {

    const [cookies, setCookie] = useCookies(['id']);

    const signout =()=>{
      setCookie('id',null,{path:'/'})
      window.location.reload()
    }
    
     if(!cookies.id ||cookies.id==='null' ){
        return(
          <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}}>      
            <Login />
          </div>
        )
     }
    else{
        return(
          <div>
          Logged in

          <button className="btn btn-primary" onClick={signout}>sign out</button>

            </div>
        )
     
    }
  

}

export default Home;
