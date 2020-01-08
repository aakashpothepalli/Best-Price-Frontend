import React from "react"
import Navbar from "./components/Navbar"
import Axios from 'axios'
import {useEffect} from "react"
import { useState } from "react"
import {useCookies} from "react-cookie"
import {apiurl} from './apiurl'
export default function Cart() {


    const [cookies, setCookie] = useCookies();

    const [listItems,setListItems]=useState([])

    useEffect(()=>
        Axios.get(`${apiurl}/cart`,{params:{id:cookies.id}}).then((res)=>{
            console.log(res.data)
            setListItems(res.data.products)
        }),[])
   
    
    return (
        <div>
            <Navbar/>
            <div className="display-4">
                Mycart
                {listItems.map(el=><div>{el}</div>)}
            </div>
        </div>
    )
}