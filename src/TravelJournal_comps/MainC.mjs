import React from 'react'

 export default function MainC(props){
    return(
        <section>
            <img src={props.imageUrl} alt="" srcset="" className='img1'/>
            <div className="info">
                <div className="line1">
                    <img src="./TravelJournal_imgs/locicon.png" alt="" srcset="" />
                    <h6>{props.location}</h6>
                    <a href={props.googleMapsUrl} className="link">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h3>{props.startDate}-{props.endDate}</h3>
                <p>{props.description}</p>
            </div>
            <hr/>
        </section>
    )
 }