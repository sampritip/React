import React from "react"
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
import Data from "./data.js"
export default function App()
{
    const data = Data.map(item => {
        return (
            <Card 
                key = {item.id}
                content = {item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {data}
        </div>
    )
}