import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
    const [pickupLocation, setPickupLocation] = useState('')
    const [pickupDate, setPickupDate] = useState('')
    const [returnDate, setReturnDate] = useState('')
    const getNextDay = (dateStr) => {
        if (!dateStr) return new Date().toISOString().split("T")[0];
        const date = new Date(dateStr);
        date.setDate(date.getDate() + 1);
        return date.toISOString().split("T")[0];
    };


  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
        <h1 className="text-4xl md:text-5xl font-semibold capitalize">Luxury cars on rent</h1>
            <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px 8px_20px_rgba(0,0,0,0.1)]'>
                <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
                    <div className="flex flex-col items-start gap-2">
                        <select name="" id="" className='outline-none' value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required>
                            <option value="">Pickup List</option>
                            {cityList.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                        <p className='px-1 text-sm text-gray-500 text-center'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="pickup-date">Pick-up Date</label>
                        <input type="date" id='pickup-date' min={new Date().toISOString().split('T')[0]} value={pickupDate} onChange={(e) => {setPickupDate(e.target.value); setReturnDate('');}} className='text-sm text-gray-500 outline-none' required />
                        {/* <p className='px-1 text-sm text-gray-500 text-center'>{pickupDate ? pickupDate : 'Select date'}</p> */}
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="return-date">Return Date</label>
                        <input type="date" id='return-date' min={pickupDate ? getNextDay(pickupDate) : new Date().toISOString().split('T')[0]} value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className='text-sm text-gray-500 outline-none' required />
                        {/* <p className='px-1 text-sm text-gray-500 text-center'>{returnDate ? returnDate : 'Select date'}</p> */}
                    </div>
                    
                </div>
                <button className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
                    <img src={assets.search_icon} alt="Search" className='brightness-300' />
                    Search
                </button>
            </form>
        <img src={assets.main_car} alt="Rent a car" className='max-h-74'/>
    </div>
    
  )
}

export default Hero