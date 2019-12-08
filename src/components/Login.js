import React,{useState} from 'react';
import firebase from "../firebase"
import {useCookies} from "react-cookie"

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
                    window.location.reload()
                }
            }
        })
        
    }

    const styles = {
        parent:{
            justifyContent:'center',
            display:'flex',
            textAlign:'center',
            alignItems:'center',
            alignContent:'center',
            width:'80%',
            maxWidth:410,
           
            // paddingLeft:'25%',
            // paddingRight:'25%',
            // paddingTop:'15%'
        },
        textbox:{
            width:'80%'
        }
       
    }

    return (
        <div className=" card" style={styles.parent} >


                <div >
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={event=>{setEmail(event.target.value)}}/>
                </div>

                <div >
                    <label>Pass</label>
                    <input type="password" class="form-control textbox" id="pass" aria-describedby="emailHelp" onChange={event=>{setPass(event.target.value)}}/>
                </div>
                
                <button onClick={submit} className="btn btn-primary mt-5" >click</button>

            
        </div>
    );
};

export default Login