import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {

    const testimonials = [
        { name: "Rashid Seif", address: "Nairobi, Kenya", image: assets.testimonial_2, testimonial: "I have rented cars from various companies, but the experience with Top Wings was exceptional" },
        { name: "Rhodah Wanjiku", address: "Nairobi, Kenya", image: assets.testimonial_3, testimonial: "Top Wings made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!" },
        { name: "Farhiya Mohamed", address: "Nairobi, Kenya", image: assets.testimonial_1, testimonial: "I highly recomend Top Wings! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent services" }
    ];

  return (
     <div className="py-28 px-6 md:px-16 lg:px24 xl:px-44">

        <Title title="What Our Customers Say" subTitle="Discover why discerning travellers choose Top Wings fortheir luxury accomodations around the country."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="start-icon" />
                                
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
