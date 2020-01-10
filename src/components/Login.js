import React, {useState} from 'react';
import {useCookies} from "react-cookie"
import Navbar from "./Navbar"
import Axios from 'axios'
import {apiurl} from '../apiurl'
import ClipLoader from "react-spinners/ClipLoader";

function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cookies, setCookie] = useCookies(['id']);
    const [loadingIndicator, setLoadingIndicator] = useState(false)
    const submit = () => {
        setLoadingIndicator(true)
        Axios
            .get(`${apiurl}/auth`, {
                params: {
                    email: email,
                    pass: pass
                }
            })
            .then(res => {
                console.log(res.data)
                setLoadingIndicator(false)
                if (res.data) {
                    setCookie('id', res.data.id)
                    setCookie('username', res.data.username)

                    window.open('/', '_self')
                } else 
                    alert('incorrect username or password')
            })

    }

    return (
        <div >
            <Navbar/>
        
            <ClipLoader size={150}
            css={{position:'absolute',left:0,right:0,marginLeft:'auto',marginRight:'auto',zIndex:20,width:150}}
                //size={"150px"} this also works
                color={"blue"} loading={loadingIndicator}/>

            <div className="display-4 flex text-center">Login to your account</div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                className="container">
                <div
                    className=" card"
                    style={{
                        width: 410,
                        marginTop: 30
                    }}>
                    <div className="card-body">
                        <label >Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            onChange={event => {
                                setEmail(event.target.value)
                            }}/>
                    </div>

                    <div className="card-body">
                        <label>Pass</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pass"
                            aria-describedby="emailHelp"
                            onChange={event => {
                                setPass(event.target.value)
                            }}/>
                    </div>

                    <button onClick={submit} className="btn btn-primary mt-5">click</button>

                </div>
            </div>
        </div>

    );
};

export default Login