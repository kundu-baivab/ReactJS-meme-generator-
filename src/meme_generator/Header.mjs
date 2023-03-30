import React from 'react'
import Timg from './TrollFace.png'

export default function Header(){
    return(
        <header>
            <img src={Timg} alt="" srcset="" />
            <h3>Meme Generator</h3>
            <h5>React Course - Project 3</h5>
        </header>
    )
}