import React from "react"
export default function Navbar()
{
    return(
        <nav>
        <img src = "../images/glass_window.JPG"/>
        <h3 className="name">Sampriti Patel</h3>
        <h4 className="title">Frontend Developer</h4>
        <button className="email"><i className="fa fa-envelope"></i>Email</button>
        </nav>
    )
}