import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function FollowUs(){
    return(
        <>
            <div className="followUs-section">
                <div className="followUs-section-title">
                    <h1>Follow Us:</h1>
                </div>
                <div className="followUs-section-medias">
                    <a><FontAwesomeIcon className='mediaIcon' icon={faFacebook} /></a>
                    <a><FontAwesomeIcon className='mediaIcon' icon={faInstagram} /></a>
                    <a><FontAwesomeIcon className='mediaIcon' icon={faLinkedin} /></a>
                </div>
            </div>
        </>
    )
}