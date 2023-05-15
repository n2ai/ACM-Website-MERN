import { useState } from "react"
export default function SponsorsSection({sponsorList}){

    
    return(
        <>
            <div className="sponsors-section">
                <h1>Our Sponsors</h1>
                <div className="sponsors-section-items-wrapper">
                    <img className="sponsors-section-item" src="../../images/ACMlogo.png"></img>
                    <img className="sponsors-section-item" src="../../images/ACMlogo.png"></img>
                    <img className="sponsors-section-item" src="../../images/ACMlogo.png"></img>

                </div>
                <div className="sponsors-section-contact">
                    <h3>Interested in being our sponsors?</h3>
                    <button>Contact us!</button>
                </div>
            </div>
        </>
    )
}