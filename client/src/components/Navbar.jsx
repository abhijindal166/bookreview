import React from 'react'
import { useOktaAuth } from '@okta/okta-react';
import {useHistory} from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="">BookRev.</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav mx-auto">
    <a className="nav-item nav-link active" href="/home">Home</a>
      <a className="nav-item nav-link active" href="/explore">Explore </a>-
     
      <a className="nav-item nav-link" href="/create">Create</a>
      
      <a className="nav-item nav-link active" href="/logout">logout </a>
     

    </div>
  </div>
</nav>


        </>
    )
}

export default Navbar
