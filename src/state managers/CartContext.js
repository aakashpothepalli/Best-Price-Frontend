import React, {createContext, useState} from 'react';
import Axios from "axios"
import {apiurl} from "../apiurl"

export async function getCartData(id) {
    let res = await Axios.get(`${apiurl}/cart`, {
        params: {
            id: id
        }
    })
    console.log( res.data.products[0])

    return ( await res.data.products[0])

}
const CartContext = createContext([0, () => {}]);
export default CartContext