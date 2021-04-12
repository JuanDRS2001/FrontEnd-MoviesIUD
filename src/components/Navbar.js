import React from 'react';

export default function Navbar(props){

    const {titulo} = props

    return(
        <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="MoviesIUD" width="30" height="24" className="d-inline-block align-text-top"/>
          {titulo}
      </div>
    </nav>
    );
}