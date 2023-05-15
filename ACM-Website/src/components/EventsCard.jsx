import { useState } from "react"
import background from '../../images/ACMlogo.png'
import flyer from '../../images/flyer1.jpg'
export default function EventsCard({imgURL,title,description,redirect}){
    function onChange(){
        location.href = redirect
    }
    
    return(
        <div className='events-card'>
        <img src={imgURL} className="events-card-img"></img>
        <div className="events-card-body">
            <h1 className="events-card-title">{title}</h1>
                        
            <div className="events-card-info">
                <p>{description}</p>
            </div>
            <button className="events-card-redirect" onClick={onChange}>Read more</button>
        </div>
    </div>
    )
}

