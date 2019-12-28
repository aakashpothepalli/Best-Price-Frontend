import React, {useContext} from "react"
import Navbar from "./components/Navbar"
import Axios from 'axios'
import {useEffect} from "react"
import { useState } from "react"
import {apiurl} from './apiurl'
export default function Cart() {

    
    const [data,setData]= useState({products:[]})

    useEffect(() => {
        Axios.get(`${apiurl}/cart`).then(res=>setData(res.data))
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