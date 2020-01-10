import socketIOClient from "socket.io-client"
import {apiurl} from "./apiurl"

export default socketIOClient(apiurl )
