import Carousel from 'react-bootstrap/Carousel';
import StaffCard from './StaffCard';
import {useEffect, useState} from 'react';
function StaffsSection() {

  return (
    <section className='StaffsSection'>
      <div className='StaffsSection-wrapper'>
        <div className='StaffsSection-card'>
          <div className='StaffsSection-card-img'> 
            <img src="" alt='profile-img'></img>
          </div>
          <div className='StaffsSection-card-title'>
            <p>Title</p>
          </div>
          <div className='StaffsSection-card-name'></div>
            <p>Name</p>
        </div>
        <div className='StaffsSection-card'>
          <div className='StaffsSection-card-img'> 
            <img src="" alt='profile-img'></img>
          </div>
          <div className='StaffsSection-card-title'>
            <p>Title</p>
          </div>
          <div className='StaffsSection-card-name'></div>
            <p>Name</p>
        </div>
        <div className='StaffsSection-card'>
          <div className='StaffsSection-card-img'> 
            <img src="" alt='profile-img'></img>
          </div>
          <div className='StaffsSection-card-title'>
            <p>Title</p>
          </div>
          <div className='StaffsSection-card-name'></div>
            <p>Name</p>
        </div>
        <div className='StaffsSection-card'>
          <div className='StaffsSection-card-img'> 
            <img src="" alt='profile-img'></img>
          </div>
          <div className='StaffsSection-card-title'>
            <p>Title</p>
          </div>
          <div className='StaffsSection-card-name'></div>
            <p>Name</p>
        </div>
      </div>
    </section>
  );
}

export default StaffsSection;