import { useState } from "react"
export default function SponsorsSection({sponsorList}){

    const [sponsors, setSponsors] = useState(sponsorList)

    const sponsorsArray = sponsors.map(sponsor=><span id={sponsor.name} class="sponsors-section-item"><img src={`../assets/${sponsor.name}.png`}></img></span>)

    return(
        <>
            <div className="sponsors-section">
                {sponsorsArray}
            </div>
        </>
    )
}