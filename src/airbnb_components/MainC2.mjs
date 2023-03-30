import React from 'react'

export default function MainC2(props){
    let badgeText
    if (props.item.openspots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.s3 === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <div>
            <img src={props.item.img} alt="" srcset="" className='i'/>
            <div className='card1'>
                <img src={props.item.starr} alt="" srcset=""/>
                <span>{props.item.s1}</span>
                <span className='t'>{props.item.s2}</span>
                <span className='t'>{props.item.s3}</span>
            </div>
            <p className='lines'>{props.item.p1}</p>
            <p className='lines'> <b>{props.item.b}</b>{props.item.p2}</p>
            </div>
        </div>
    )
}