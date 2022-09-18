import React from 'react'
import '../css/navb.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
 
  return (
    <div >
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to="/">Home</Link>
      <ul class="navbar-nav mx-auto mb-3 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/AniFull">Animes</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/">Chapters</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    
  )
}
