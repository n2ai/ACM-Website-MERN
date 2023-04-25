
import React, { useState } from 'react';
import VerticalButtons from './AdminsideBar';

function AdminBanner() {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(prevIsActive => !prevIsActive);
  }

  return (
    <div className="row">
      <div className="nav-toggle">
        <button className="toggle-button" onClick={handleToggle}></button>
      </div>
      <div className="text">
        <h1>Hello, World!</h1>
      </div>
      <div className={`vertical-buttons-container  d-md-flex`}>
        {isActive && <VerticalButtons />}
      </div>
    </div>
    
  );
}

export default AdminBanner;
