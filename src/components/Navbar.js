import React from 'react';

function App() {
  return (
    <div className="navbar navbar-expand bg-light w-100" >
     
    <a href="/" className ="navbar-brand ">ECommerce</a>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">   
            <a class="nav-link" href="/login">Login / Signup</a>
        </li>
      
      </ul>
      
    </div>
  );
}

export default App;
