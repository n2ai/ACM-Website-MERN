import { useState } from "react"
import background from '../../images/ACMlogo.png'
import flyer from '../../images/flyer1.jpg'
import EventsCard from "./EventsCard"
import dataBase from "./testData"
export default function EventsSection(){
    const [cardState, setCardState] = useState(dataBase)
    //Algorithm to check the number of the state
    let filteredEvents = []
    if(dataBase.length > 6){
        let minList = dataBase.map(event=>event.Date.Date.parse())
        filteredEvents = dataBase.filter(event => event.Date)
    }
    const [eventsState, setEventsState] = useState(filteredEvents)

    let date = Date.parse('')

    let cardList = []
    cardList = cardState.map(card=>{
        return (<EventsCard imgURL={card.imgUrl}
        title={card.title}
        description={card.description}
        redirect={card.redirect}/>)
    })
    return (
        <>  
        <section className="eventsSection">
            <div className="eventsSection-title">
                <h1>Events</h1>
            </div>
            <section className="eventsSection-body">
                <div className="events">
                    {cardList}
                </div>
            </section>
        </section>
            
        </>
    )
}