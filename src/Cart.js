import React, {useContext} from "react"
import Navbar from "./components/Navbar"
import {LoginContext} from "./state managers/loginContext"
import Axios from 'axios'
import {useEffect} from "react"
import { useState } from "react"
export default function Cart() {

    const [loginInfo, setLoginInfo] = useContext(LoginContext)
    
    setLoginInfo(prev => {
        prev.isLoggedIn = true
        return prev
    })

    const [data,setData]= useState({products:[]})
    useEffect(() => {
        Axios.get('http://localhost:8080/q').then(res=>setData(res.data))
    })
    
    return (
        <div>
            <Navbar/>
            <div className="display-4">
                Mycart
                {data.products.map(el=>el+'\n')}
            </div>
        </div>
    )
}