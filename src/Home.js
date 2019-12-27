import React,{useEffect,useState,useContext} from 'react';
import {useCookies} from "react-cookie"
import Navbar from "./components/Navbar"
import {LoginContext} from "./state managers/loginContext"

function Home() {

    const [cookies, setCookie] = useCookies();
    const [loginInfo,setLoginInfo] = useContext(LoginContext) 

    
     if(!cookies.id ||cookies.id==='null' ){
      setLoginInfo(prev => {prev.isLoggedIn=false;return prev})
        return(
          <div>
            <div style={{display: 'flex', justifyContent:'center',alignItems:'center'}}>      
              <Navbar />
            
            </div>
            not logged in
            
          </div>  
        )
     }
    else{
      setLoginInfo(prev => {prev.isLoggedIn=true;return prev})
        return(
          <div>
             <Navbar />
          Logged in
            </div>
        )
     
    }
  

}

export default Home;
