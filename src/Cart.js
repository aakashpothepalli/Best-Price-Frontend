import React,{useContext} from "react"
import Navbar from "./components/Navbar"
import {LoginContext} from "./state managers/loginContext"

export default function Cart(){
    const [loginInfo,setLoginInfo] = useContext(LoginContext) 
    setLoginInfo(prev=>{
        prev.isLoggedIn = true
        return prev
    })
    return(<div>
        <Navbar/>
        <div className="display-4">
            Mycart
        
        </div>
    </div>)
}