import React from 'react'
import Header from './component/Header'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
// import LoginRegister from './component/LoginRegister'
// import Register from './component/Register'
import { Outlet } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <Register/> */}
    </div>
  )
}
