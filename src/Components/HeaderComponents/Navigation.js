import React from "react"
import "./navigation.css"

const Navigation = ()=>{
    return(
        <>
          <nav className="nav-bar">
          <div className="logo-box"><span className="logo-text">Ashita</span></div>
          <div className="nav-link-box"><ul>
            <li><a href={"#home"}>Home</a></li>
            <li><a href={"#home"}>About</a></li>
            <li><a href={"#home"}>Skills</a></li>
            <li><a href={"#home"}>Projects</a></li>
            <li><a href={"#home"}>Contact</a></li>
          </ul></div>
          <div className="nav-toggle"><i className="fa-solid fa-bars toggle-icon"></i></div>
          </nav>
        </>
    )
}

export default Navigation