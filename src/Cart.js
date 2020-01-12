import React from "react"
import Navbar from "./components/Navbar"
import Axios from 'axios'
import {useEffect} from "react"
import {useState} from "react"
import {useCookies} from "react-cookie"
import socketIOClient from "socket.io-client"
import {apiurl} from './apiurl'
import soc from "./socketIO"

export default function Cart() {

    const [cookies, setCookie] = useCookies();

    const [listItems, setListItems] = useState([]) 

    useEffect(() => {
        if (cookies.id && cookies.id !== null) 
            Axios
                .get(`${apiurl}/cart`, {
                    params: {
                        id: cookies.id
                    }
                })
                .then((res) => {
                    console.log(res.data)
                    setListItems(res.data.products)
                })
        }, [])

    useEffect(() => {
        soc.emit('cart','hi')
        soc.on('cart', res => console.log(res))
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="display-4">
                Mycart 
                {
                    listItems.map(el =>< div key = {
                        el
                    } > {
                        el
                    }</div>)
                }
            </div>
        </div>
    )
}