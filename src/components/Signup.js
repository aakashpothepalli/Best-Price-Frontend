import React, {useState} from 'react';
import Navbar from "./Navbar"
import Axios from 'axios'
import {useCookies} from "react-cookie"
import ClipLoader from "react-spinners/ClipLoader";
import {useHistory} from "react-router-dom"
import {apiurl} from '../apiurl'
function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cookies, setCookie] = useCookies();
    const [loadingIndicator, setLoadingIndicator] = useState(false)
    const history = useHistory()
    const submit = async () => {
        setLoadingIndicator(true)
        const loginInfo = {
            'name': name,
            'email': email,
            'pass': pass
        }
        let res = await Axios
            .post(`${apiurl}/signup`, {
                'name': name,
                'email': email,
                'pass': pass
            })
            .then(res => res.data)
        setCookie('id', res.id)
        setCookie('username', res.username)
       history.push('/')

    }

    return (
        <div>
            <Navbar/>

            <ClipLoader size={150} css={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    zIndex: 20,
                    width: 150
                }}
                //size={"150px"} this also works
                color={"blue"} loading={loadingIndicator}/>

            <div className="display-4 flex text-center">Signup for an account</div>

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
                        margin: 30
                    }}>
                    <div className="card-body">
                        <label >Name</label>
                        <input
                            type="name"
                            className="form-control"
                            id="name"
                            aria-describedby="emailHelp"
                            onChange={event => {
                                setName(event.target.value)
                            }}/>
                    </div>

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