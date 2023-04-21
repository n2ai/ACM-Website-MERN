import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const StaffRow = () => {

  const staff = [
    [
      {
        name: 'Staff 1',
        picture: 'https://loremflickr.com/150/151/person',
        title: 'CEO'
      },
      {
        name: 'Staff 2',
        picture: 'https://loremflickr.com/150/152/person',
        title: 'COO'
      },
      {
        name: 'Staff 3',
        picture: 'https://loremflickr.com/150/153/person',
        title: 'CFO'
      }
    ],
    [
      {
        name: 'Staff 4 ',
        picture: 'https://loremflickr.com/150/154/person',
        title: 'CTO'
      },
      {
        name: '5',
        picture: 'https://loremflickr.com/150/155/person',
        title: 'CIO'
      },
      {
        name: '6',
        picture: 'https://loremflickr.com/150/156/person',
        title: 'CMO'
      }
    ]
  ];

  return (

    <><div 
    id="carTitle" 
    className="carTitle">
      <h3>Meet our staff</h3>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner">
        {staff.map((staffGroup, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="row">
              {staffGroup.map((staffMember, index) => (
                <div className="col-sm-4" key={index}>
                  <div className="card mb-3">
                    <img src={staffMember.picture} className="card-img-top" alt={staffMember.name} />
                    <div className="card-body">
                      <h5 className="card-title">{staffMember.name}</h5>
                      <p className="card-text">{staffMember.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div></>
  );
};

export default StaffRow;
