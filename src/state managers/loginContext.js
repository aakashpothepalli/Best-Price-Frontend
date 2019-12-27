import React,{useState,createContext} from "react"


export const LoginContext = createContext()

export const LoginInfoProvider = (props)=>{
    const [loginInfo,setLoginInfo] = useState({
        isLoggedIn:false,
        name:null,

    })
    return(
        <LoginContext.Provider value={[loginInfo,setLoginInfo]}  >
            {props.children}
        </LoginContext.Provider>
    )
}
