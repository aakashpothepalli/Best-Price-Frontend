import React,{useState,useEffect} from 'react';
import Product from './Product'
import Axios from 'axios'
import { apiurl } from '../apiurl';
const LandingPage = (props) => {
    const [listItems,setListItems]=useState([])

   

    return (
        <div>
            <div className='display-4' style={{flex:1,display:'flex',}}>HI THERE</div>

            <div className=' card-columns'>
            <Product name='Football'/>
            <Product name='Gaming Laptop'/>
            <Product name='PS4'/>
            <Product name='TV'/>
            <Product name='iPhone 11'/>
            <Product name='MSRIT'/>
            </div>
        </div>
    );
};

export default LandingPage;