import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {

  
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
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
          <div
            class="collapse navbar-collapse justify-content-end "
            id="navbarNav"
          >
            <ul class="nav  ">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/password"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/milk">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="login">
                  Login
                </Link>
              </li>
            </ul>

            <button
              class="btn btn-secondary dropdown-toggle d-flex   "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Login
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/login">
                  Admin
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/">
                  User
                </a>
              </li>
            </ul>
            {/* <button class="login-button" onclick="toggleDropdown()">Login</button>
        <div class="dropdown-menu" id="loginOptions" style="display: none;">
            <a href="#admin-login">Admin Login</a>
            <a href="#user-login">User Login</a>
        </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
