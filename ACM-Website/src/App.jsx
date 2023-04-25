import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navigator from './components/Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundVideo from './components/BackgroundVideo';
import StaffRow from './components/StaffRow';
import EventsSection from './components/EventsSection';
import AdminBanner from './components/AdminBanner';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<AdminBanner/>}></Route>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}


const Root = ()=>{
  return(
    <>
      <Banner/>
      <Navigator/>
      <div>
        <Outlet/>
      </div>
    </>

  )
}

export default App
