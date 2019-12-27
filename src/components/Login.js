import React,{useState} from 'react';
import firebase from "../firebase"

function Login () {
    const [email,setEmail]  =useState('')
    const [pass,setPass] = useState('')
    const submit=()=>{
        alert('form su')
        const pref=  firebase.database().ref('users').push()    
        const loginInfo = {'email':email,'pass':pass}
        
        pref.set(loginInfo)
        firebase.database().ref('users').once('value').then(dataSnap=>console.log(dataSnap.val()))
    }
    const styles = {
        parent:{
            justifyContent:'center',
            textAlign:'center',
            paddingLeft:'25%',
            paddingRight:'25%',
            paddingTop:'15%'
        },
       
    }

    return (
        <div className="" style={styles.parent} >

            <form onSubmit={submit}>

                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={event=>{setEmail(event.target.value)}}/>
                </div>

                <div className="form-group">
                    <label for="pass">Pass</label>
                    <input type="password" class="form-control" id="pass" aria-describedby="emailHelp" onChange={event=>{setPass(event.target.value)}}/>
                </div>
                
                <button type = "submit" className="btn btn-primary mt-5" >click</button>

            </form>
        </div>
    );
};

export default Login