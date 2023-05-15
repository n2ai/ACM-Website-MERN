import Carousel from 'react-bootstrap/Carousel';
import {useEffect, useState} from 'react';
import fakeImg from '../../images/portrait1.jpg'
function StaffsSection() {
  return (
    <>
    <section className='StaffsSection'>
    <div className='StaffsSection-title'>
        <h1>Meet Our Staffs</h1>
      </div>
      <div className='StaffsSection-wrapper'>
        <div className='StaffsSection-card'>
          <div className='StaffsSection-card-img'> 
            <img src={fakeImg} alt='profile-img'></img>
          </div>
          <div className='StaffsSection-card-socialMedias'>
            <p>Linkedin</p>
            <p>Github</p>
          </div>
          
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