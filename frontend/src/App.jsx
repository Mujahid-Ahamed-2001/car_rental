import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, useLocation, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import MyBookings from './pages/MyBookings';
import CarDetail from './pages/CarDetail';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath =  useLocation().pathname.startsWith('/owner');
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetail />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBookings />} />
      </Routes>
    </>
  )
}

export default App