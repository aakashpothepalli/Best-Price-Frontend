import React, { useContext } from "react"
import Navbar from "./components/Navbar"

import CartContext from "./state managers/CartContext"
import CartItem from "./components/CartItem"
export default function Cart() {

    const cartData = useContext(CartContext)[0]
 
    return (
        <div>
            <Navbar/>
            <div className="display-4">
                Mycart 
              <div className="card-columns" style={{minWidth:'100px'}}>   {
                    cartData.map(el =>< CartItem name = {el.name}/>)
                }
                </div>
            </div>
        </div>
    )
}