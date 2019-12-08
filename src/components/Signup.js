import React,{useState} from 'react';
import firebase from "../firebase"

function Login () {
    const [name,setName]  =useState('')
    const [email,setEmail]  =useState('')
    const [pass,setPass] = useState('')

    const submit=()=>{
        
        const pref=  firebase.database().ref('users').push()    
        const loginInfo = {'name':name,'email':email,'pass':pass}
        
        pref.set(loginInfo).then(e=>console.log(e))
        
    }

    
    return (
        <div className=" card" style={{width:410}}>
                <div  className="card-body">
                    <label >Name</label>
                    <input type="name" className="form-control" id="name" aria-describedby="emailHelp" onChange={event=>{setName(event.target.value)}}/>
                </div>

                <div  className="card-body">
                    <label >Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={event=>{setEmail(event.target.value)}}/>
                </div>

                <div className="card-body">
                    <label>Pass</label>
                    <input type="password" className="form-control" id="pass" aria-describedby="emailHelp"  onChange={event=>{setPass(event.target.value)}}/>
                </div>
                
                <button onClick={submit} className="btn btn-primary mt-5" >click</button>

            
        </div>
    );
};

export default Login