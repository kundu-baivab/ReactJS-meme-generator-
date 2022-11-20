import React from 'react'

export default function Header(){
    return(
        <header>
            <nav id="nav">
                <img src={"https://cdn-icons-png.flaticon.com/512/1126/1126012.png"} alt="" width="60px"></img>
                <ul id="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>   
                </ul>
            </nav>
        </header>
    )
}