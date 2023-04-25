import { useState } from "react"
import background from '../../images/ACMlogo.png'
import flyer from '../../images/flyer1.jpg'
import EventsCard from "./EventsCard"
import dataBase from "./testData"
export default function EventsSection(){
    const [cardState, setCardState] = useState(dataBase)
    let cardList = []
    cardList = cardState.map(card=>{
        return (<EventsCard imgURL={card.imgUrl}
        title={card.title}
        description={card.description}
        redirect={card.redirect}/>)
    })
    return (
        <>  
            <div className="eventsSection-title">
                <h1>Events</h1>
            </div>
            <section className="eventsSection-body">
                <div className="events">
                    {cardList}
                </div>
            </section>
            
        </>
    )
}