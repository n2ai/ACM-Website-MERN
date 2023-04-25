import Carousel from 'react-bootstrap/Carousel';
import StaffCard from './StaffCard';
function StaffsSection() {
  return (
    <Carousel className='StaffsSection' variant='dark'>
      <Carousel.Item className='StaffsSlide'>
        <div className="card-wrapper">
          <StaffCard/>
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
  );
}

export default StaffsSection;