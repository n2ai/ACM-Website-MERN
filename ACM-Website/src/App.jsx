import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navigator from './components/Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundVideo from './components/BackgroundVideo';
import StaffRow from './components/StaffRow';
function App() {
  

  return (
    <div className="App">
      <Banner />
      <Navigator />
      <BackgroundVideo />
      <br />
      <StaffRow />
    </div>
  )
}

export default App
