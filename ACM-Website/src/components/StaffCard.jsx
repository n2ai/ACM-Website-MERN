import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import flyer from '../../images/flyer1.jpg'
import portrait from '../../images/portrait1.jpg'
export default function StaffCard() {

  return (
    <div className='StaffCard'>
        <div className='StaffCard-front'>
            <img src={portrait}></img>
        </div>
        <div className='StaffCard-back'>
            <h1>Name</h1>
            <h3>Title</h3>
        </div>
    </div>
  );
}