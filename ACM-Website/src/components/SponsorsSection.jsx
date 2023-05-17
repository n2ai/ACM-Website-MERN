import { useState } from "react"
export default function SponsorsSection({sponsorList}){

    
    return(
        <>
            <div className="sponsors-section">
                <h1>Our Sponsors</h1>
                <div className="sponsors-section-items-wrapper">
                    <a href="#"><img className="sponsors-section-item" src="../../images/ACMlogo.png"></img></a>
                    <a href="#"><img className="sponsors-section-item" src="../../images/ACMlogo.png"></img></a>
                    <a href="#"><img className="sponsors-section-item" src="../../images/ACMlogo.png"></img></a>


                </div>
                <div className="sponsors-section-contact">
                    <div className="sponsors-section-contact-quote">
                        <h3>Interested in being our sponsors?</h3>
                    </div>
                    <div className="sponsors-section-contact-button">
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}