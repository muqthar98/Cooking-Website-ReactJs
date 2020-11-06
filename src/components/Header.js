import React from 'react';
import "./Header.css";

function Header() {

    return (
        <div className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand" href="/">Cooking</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link" href="/">Home</a>
      <a class="nav-item nav-link" href="/Login">Login</a>
      <a class="nav-item nav-link" href="/About">About</a>
      <a class="nav-item nav-link" href="/Contact">Contact Us</a>
     </div>
    </div>
   </nav>
</div>        
    )
}

export default Header;
