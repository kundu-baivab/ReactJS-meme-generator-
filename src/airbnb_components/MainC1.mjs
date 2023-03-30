import React from 'react'
import Myimage from './grpimg.png'

export default function MainC1(){
    return(
        <div className="mainc1">
            <img src={Myimage} alt='' className="rounded mx-auto d-block"/>
            <h1>Online Experiences</h1>
            <h5>Join unique interactive activities led by </h5>
            <h5>one-of-a-kind hosts—all without leaving </h5>
            <h5>home.</h5>
        </div>
    )
}