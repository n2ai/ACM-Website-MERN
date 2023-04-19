import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navigator from './components/Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundVideo from './components/BackgroundVideo';
import { createBrowserRouter, createRoutesFromElements, Route, Link,Outlet, RouterProvider } from 'react-router-dom';
const Root = ()=>{
  return (<>
  <Banner/>
  <Navigator />
  <div>
    <Outlet />
  </div>
  </>)
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<BackgroundVideo/>} />
      </Route>
    )
  )

  return (
    
      <RouterProvider router={router} />
    
  )
}

export default App
