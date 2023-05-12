import Carousel from 'react-bootstrap/Carousel';
import {useEffect, useState} from 'react';
import fakeImg from '../../images/portrait1.jpg'
function StaffsSection() {
  //Will divide this section into staff card, manage using state!
  return (
    <>
    <section className='StaffsSection'>
    <div className='StaffsSection-title'>
        <h1>Meet Our Staffs</h1>
      </div>
      <div className='StaffsSection-wrapper'>
        /**Below will be staffcard */
        <div className='StaffsSection-card'>
          <div className='StaffsSection-card-img'> 
            <img src={fakeImg} alt='profile-img'></img>
          </div>
          <div className='StaffsSection-card-socialMedias'>
            <a href=''><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
            <a href=''><FontAwesomeIcon icon="fa-brands fa-github" /></a>
          </div>
          <br></br>
          <br></br>
          <div className='StaffsSection-card-title'>
            <p>Title</p>
          </div>
          <div className='StaffsSection-card-name'></div>
            <p>Name</p>
        </div>
        
      </div>
      
    </section>
    </>
  );
}

export default StaffsSection;