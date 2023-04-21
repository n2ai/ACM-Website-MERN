import { useState } from "react"
import background from '../../images/ACMlogo.png'
import flyer from '../../images/flyer1.jpg'
export default function EventsSection(){


    return (
        <>  
            <div className="eventsSection-title">

            </div>
            <section className="eventsSection-body">
                <div className="events">
                    <div className='events-card'>
                        <img src={flyer} className="events-card-img"></img>
                        <div className="events-card-body">
                            <h1 className="events-card-title">Title</h1>
                            <p className="events-card-subtitle">Description of the event</p>
                            
                            <p className="events-card-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sapiente aliquam quam voluptate sequi dolores molestiae repudiandae officia placeat eum sunt, fugiat quas. Eius, quae!</p>
                            <button className="events-card-redirect">Read more</button>
                        </div>
                    </div>
                    
                </div>
            </section>

            
        </>
    )
}