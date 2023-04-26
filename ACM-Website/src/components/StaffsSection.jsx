import Carousel from 'react-bootstrap/Carousel';
import StaffCard from './StaffCard';
import {useEffect, useState} from 'react';
function StaffsSection() {

  return (
    <section className='StaffsSection'>
      <div className='StaffsSection-title'>
          <h1>Meet our officers</h1>
      </div>
      <Carousel  >
      <Carousel.Item className='StaffsSlide'>
        <div className="card-wrapper">
          <StaffCard />
          <StaffCard/>
          <StaffCard/>
        </div>
        
      </Carousel.Item>
      <Carousel.Item className='StaffsSlide'>
        <div className="card-wrapper">
          <StaffCard/>
          <StaffCard/>
          <StaffCard/>
        </div>

      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default StaffsSection;