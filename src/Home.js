import React,{useEffect,useState,useContext} from 'react';
import {useCookies} from "react-cookie"
import Navbar from "./components/Navbar"

function Home() {

    const [cookies, setCookie] = useCookies();

    
     if(!cookies.id ||cookies.id==='null' ){
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
        return(
          <div>
             <Navbar />
          Logged in
            </div>
        )
     
    }
  

}

export default Home;
