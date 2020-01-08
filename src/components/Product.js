import React, { useCallback } from 'react';
import Axios from 'axios'
import { apiurl } from '../apiurl';
import {useCookies} from "react-cookie"
const Product = (props) => {
    const [cookies,setCookie] = useCookies()

    const add2cart = ()=> {
        //TODO: post to database and update under cart
        Axios.post(`${apiurl}/cart`,{id:cookies.id,newItem:props.name}).then(res=>console.log(res.data))
    }

    return (
        <div className='card' style={{}}>
            <div className="card-body">
                <div className='card-title display-4'> {props.name}</div>
                <button className='btn btn-primary' onClick={add2cart}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;