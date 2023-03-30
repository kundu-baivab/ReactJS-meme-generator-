import React from 'react'
import headimg from './headicon.png'

export default function Header(){
    return(
        <div className="head">
            <img src={headimg} alt="" />
            <h5>my travel journal.</h5>
        </div>
    )
}