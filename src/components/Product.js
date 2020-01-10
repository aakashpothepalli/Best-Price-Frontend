import React, {useCallback} from 'react';
import Axios from 'axios'
import {apiurl} from '../apiurl';
import {useCookies} from "react-cookie"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = (props) => {
    const [cookies, setCookie] = useCookies()

    const add2cart = () => {
        if (cookies.id && cookies.id !=='null') {
            console.log('wwww')
            Axios
                .post(`${apiurl}/cart`, {
                    id: cookies.id,
                    newItem: props.name
                })
                .then(res => {
                    if (res) {
                        toast.success("added to cart !", {
                            position: toast.POSITION.BOTTOM_RIGHT,
                            autoClose: 2000
                        });
                    } else {
                        toast.error("Sorry Please try again later", {
                            position: toast.POSITION.BOTTOM_RIGHT,
                            autoClose: 2000
                        })
                    }
                })

        } else 
            toast.warn('please login or signup first', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            })
    }

    return (
        <div className='card' style={{}}>
            <div className="card-body">
                <div className='card-title display-4'>
                    {props.name}</div>
                <button className='btn btn-primary' onClick={add2cart}>Add to cart</button>
            </div>

        </div>
    );
};

export default Product;