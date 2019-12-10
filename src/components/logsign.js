import React from "react"

import Login from "./Login"
import Signup from "./Signup"
import Navbar from "./Navbar"
export default function logsign(){

    return(
    <div>
    <Navbar/>
        <div className="row">
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',borderRight:10,borderColor:'black'}}className=" col-sm-6 col-md-6 col-lg-6 ">
                <Login/>
            </div>
            
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} className=" col-sm-6 col-md-6 col-lg-6" >
                <Signup/>
            </div>
        </div>
    </div>
    )
}