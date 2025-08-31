import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const LeaseCar = () => {

  const { axios, currency } = useAppContext()

  const [image, setImage] = useState(null)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: '',
    location: '',
    description: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoading) return null

    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('carData', JSON.stringify(car))

      const { data } = await axios.post('/api/owner/add-car', formData)

      if (data.success) {
        toast.success(data.message)
        setImage(null)
        setCar({
          brand: '',
          model: '',
          year: 0,
          pricePerDay: 0,
          category: '',
          transmission: '',
          fuel_type: '',
          seating_capacity: '',
          location: '',
          description: '',
        })
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
          <Title title="Lease Car" subTitle="Lease your car with us and earn monthly stress-free." />
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-grey-500 text-sm mt-6 '>
            <div className='flex items-center gap-2 w-full'>
              <label htmlFor="car-image">
                <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer' />
                <input type="file" id='car-image' accept='image/*' hidden onChange={e => setImage(e.target.files[0])} />
              </label>
              <p className='text-sm text-grey-500'>Upload Car Picture</p>
            </div>
    
    
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              <div className='flex flex-col w-full'>
                <label>Transmission</label>
                <select onChange={e => setCar({ ...car, transmission: e.target.value })} value={car.transmission} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                  <option value="">Select a transmission</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                  <option value="Semi-Automatic">Semi-Automatic</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <label>Fuel Type</label>
              <select onChange={e => setCar({ ...car, fuel_type: e.target.value })} value={car.fuel_type} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select fuel type</option>
                <option value="Gas">Gas</option>
                <option value="Disel">Disel</option>
                <option value="Petrol">Petrol</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className='flex flex-col w-full'>
              <label>Seating Capacity</label>
              <input type="number" placeholder="0" required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.seating_capacity} onChange={e => setCar({ ...car, seating_capacity: e.target.value })} />
            </div>
    
            <div className='flex flex-col w-full' >
              <label>Location</label>
              <select onChange={e => setCar({ ...car, location: e.target.value })} value={car.location} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                <option value="">Select location</option>
                <option value="Nairobi">Nairobi</option>
              </select>
            </div>

            <div className='flex flex-col w-full'>
              <label>Phone Number</label>
              <input type="number" placeholder="+254" required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.seating_capacity} onChange={e => setCar({ ...car, seating_capacity: e.target.value })} />
            </div>
    
            <div className='flex flex-col w-full'>
              <label>Description (optional) </label>
              <textarea rows={5} placeholder="e.g. A luxurious SUV with a specious interior and a poerfull engine." required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.description} onChange={e => setCar({ ...car, description: e.target.value })}></textarea>
            </div>
            <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
              <img src={assets.tick_icon} alt="" />
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
  )
}

export default LeaseCar
