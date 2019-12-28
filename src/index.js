import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import {LoginInfoProvider} from "./state managers/loginContext"

ReactDOM.render(<CookiesProvider><App /></CookiesProvider>, document.getElementById('root'));
