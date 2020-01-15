import React from 'react';
import {useCookies} from "react-cookie"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
function Home() {

    const [cookies, ] = useCookies();

    
     if(!cookies.id ||cookies.id==='null' ){
        return(
          <div>
              <Navbar />
              <LandingPage isLoggedIn={false}/>
            not logged in
            
          </div>  
        )
     }
    else{
        return(
          <div>
             <Navbar />
          <LandingPage isLoggedIn={true}/>
            </div>
        )
     
    }
  

}

export default Home;
