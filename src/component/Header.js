import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
export default function Header() {

  
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="#">Navbar</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          {/* <!-- Navbar Links --> */}
          <ul class="navbar-nav me-3">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/password">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/farmer">About</Link>
            </li>
          </ul>
  
          {/* <!-- Login Dropdown Button --> */}
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="loginDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Login
            </button>
            <ul class="dropdown-menu" aria-labelledby="loginDropdown">
              <li>
                <Link class="dropdown-item" to="/login">Admin</Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/">User</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  
  );
}
