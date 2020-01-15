import React,{useState,useEffect} from 'react';
import Product from './Product'
import Axios from 'axios'
import { apiurl } from '../apiurl';
const LandingPage = (props) => {
    const [listItems,setListItems]=useState([])

   

    return (
        <div>

            <div className=' card-columns'>
            <Product key='a1' name='Football'/>
            <Product key='a2' name='Gaming Laptop'/>
            <Product key='a3' name='PS4'/>
            <Product key='a4' name='TV'/>
            <Product key='a5' name='iPhone 11'/>
            <Product key='a6' name='MSRIT'/>
            </div>
        </div>
    );
};

export default LandingPage;