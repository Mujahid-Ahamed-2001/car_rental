import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const Testimonial = () => {

    const dummyTestimonialData = [
        {
            image: assets.testimonial_image_1,
            name: 'John Doe',
            title: 'Marketing Director, TechCorp',
            content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
            rating: 5,
        },
        {
            image: assets.testimonial_image_2,
            name: 'Jane Smith',
            title: 'Content Creator, TechCorp',
            content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 4,
        },
        {
            image: assets.testimonial_image_2,
            name: 'Jane Smith',
            title: 'Content Creator, TechCorp',
            content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 3,
        },
    ]
  return (
        <div className='py-28 px-6 md:px-16 lg:px-24 lx:px-44'>
            <Title title="What Our Customers Say" subtitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world." align="center" />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
                {dummyTestimonialData.map((testimonial, index) => (
                    <div key={index} className='bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer'>
                        <div className="flex items-center gap-1">
                            {Array(testimonial.rating).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt=" Star" className='hover:scale-120 transition-all duration-300' />
                            ))}
                        </div>
                        <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 object-contain rounded-full' alt='' />
                            <div className='text-sm text-gray-600'>
                                <h3 className='text-xl font-medium'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial