import React from 'react'
import { assets, cityList } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useState } from 'react'

const Hero = () => {

  const [pickupLocation, setPickupLocation] = useState('')

  const {pickupDate, setPickupDate, returnDate, setReturnDate, navigate} = useAppContext()

  const handleSeach = (e)=>{
    e.preventDefault()
    navigate('/cars?pickupLocation=' + pickupLocation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate )
  }

  return (
    <div className='h-60 flex flex-col items-center justify-center gap-1 bg-light text-center'>
      <form onSubmit={handleSeach} className='flex flex-row md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white gap shadow-[0px_8px_20px_rgba(0,0,0,0.1)'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
          <div className='hidden flex flex-col items-start gap-2'>
            <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}>
              <option value="">Pickup Location</option>
              {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
            </select>
            <p className='px-1 text-sm text-grey-500'>{pickupLocation ? pickupLocation : 'Only from Office'}</p>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor="pickup-date">Pickup Date</label>
            <input value={pickupDate} onChange={e=>setPickupDate(e.target.value)} type="date" id='pickup-date' min={new Date().toISOString().split('T'[0])} className='text-sm text-grey-500' required />
          </div>
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor="return-date">Return Date</label>
            <input value={returnDate} onChange={e=>setReturnDate(e.target.value)} type="date" id='return-date' className='text-sm text-grey-500' required />
          </div>
        </div>
        <button className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-14 bg-primary-dull text-white rounded-full cursor-pointer'>
          <img src={assets.search_icon} alt="search" className='brightness-300' />
          Search
        </button>
      </form>
    </div>
  )
}

export default Hero
