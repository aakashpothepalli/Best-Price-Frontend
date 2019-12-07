import React from 'react';
import './App.css';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div >
       <Navbar/>
      <div style={{
            display: 'flex', 
            justifyContent:'center',
            }}>     
      <Login />
      </div>

    </div>
  );
}

export default App;
