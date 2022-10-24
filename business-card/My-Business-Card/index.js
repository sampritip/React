import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"

function Card()
{
    return(
        <body>
            <div className="inner-body">
                <Navbar />
                <About />
                <Interests />
                <Footer />
            </div>
        </body>  
    )
}

ReactDOM.render(<Card />, document.getElementById("root"))