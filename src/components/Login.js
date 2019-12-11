import React,{useState} from 'react';
import firebase from "../firebase"
import {useCookies} from "react-cookie"
import Navbar from "./Navbar"
function Login () {
    const [email,setEmail]  =useState('')
    const [pass,setPass] = useState('')
    const [cookies, setCookie] = useCookies(['id']);

    const submit=()=>{
        
        // const pref=  firebase.database().ref('users').push()    
        // const loginInfo = {'email':email,'pass':pass}
        
        // pref.set(loginInfo).then(e=>console.log(e))
        
        firebase.database().ref('users').once('value').then(datasnap=>{
            const data = datasnap.val()
            console.log(data)
            for(let el in data){
                if(data[el].email ==email && data[el].pass==pass){
                    setCookie('id',el,{path:'/'})
                    window.open('/','_self')
                }
            }
        })
        
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