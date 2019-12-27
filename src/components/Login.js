import React,{useState} from 'react';
import firebase from "../firebase"
import {useCookies} from "react-cookie"
import Navbar from "./Navbar"
import Axios from 'axios'
function Login () {
    const [email,setEmail]  =useState('')
    const [pass,setPass] = useState('')
    const [cookies, setCookie] = useCookies(['id']);

    const submit=()=>{
       
        Axios.get(`http://localhost:8080/auth`,{
            params:{
                email:email,
                pass:pass
            }
        }).then(res=>console.log(res.data))
        
    }

    
    return (
        <div >
        <Navbar/>
        <div className="display-4 flex text-center">Login to your account</div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className="container">
            <div className=" card" style={{width:410,marginTop:30}}>
                    <div  className="card-body">
                        <label >Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={event=>{setEmail(event.target.value)}}/>
                    </div>

                    <div className="card-body">
                        <label>Pass</label>
                        <input type="password" className="form-control" id="pass" aria-describedby="emailHelp" onChange={event=>{setPass(event.target.value)}}/>
                    </div>
                    
                    <button onClick={submit} className="btn btn-primary mt-5" >click</button>

                
            </div>
        </div>
        </div>

    );
};

export default Login