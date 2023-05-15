import BackGroundVideo from "./BackgroundVideo";
import Banner from "./Banner";
import EventsSection from "./EventsSection";
import StaffsSection from './StaffsSection';
import SponsorsSection from "./SponsorsSection";
import Footer from "./Footer";
import FollowUS from   "./FollowUs"
//test sponsors section
import sponsorsData from "./sponsorsData"
export default function Home(){
    return(
        <>
            <BackGroundVideo/>
            <EventsSection/>
            <StaffsSection/>
            <SponsorsSection/>
        </>
    )
}

